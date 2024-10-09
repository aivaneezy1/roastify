"use client";
import { useState, useEffect, FormEvent } from "react";
import { sendMessageToExtension } from "@/utils/sendMessageToExtension";

export const WebsiteBlocker = () => {
    const [websites, setWebsites] = useState<string>("");
    const [time, setTime] = useState<number>(1); // Default time to 1 minute
    const [isActive, setIsActive] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWebsites(e.target.value);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > 0) {
            setTime(value);
        }
    };

    const startTimer = async () => {
        if (websites.trim() === "") {
            alert("Please enter websites to block.");
            return;
        }
        if (time <= 0) {
            alert("Please set a valid timer.");
            return;
        }

        const timeInMilliseconds = time * 60 * 1000; // Convert minutes to milliseconds
        setRemainingTime(timeInMilliseconds);
        setIsActive(true);

        const websiteList = websites.split(",").map((site) => site.trim()).filter(Boolean);
        localStorage.setItem("blockedWebsites", JSON.stringify(websiteList));

        try {
            await sendMessageToExtension({
                extensionId: "mllglhblghhnklofafhamhpgpdkomnmo",
                message: {
                    type: "START_FOCUS",
                    websites: websiteList,
                    duration: time * 60, // Convert minutes to seconds
                },
            });
            console.log("Websites blocked:", websiteList); // Log for debugging
        } catch (error) {
            console.error("Error sending message to extension:", error);
        }

        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 1000) {
                    clearInterval(interval);
                    setIsActive(false);
                    alert("Time's up! You can access the websites now.");

                    sendMessageToExtension({
                        extensionId: "mllglhblghhnklofafhamhpgpdkomnmo",
                        message: {
                            type: "STOP_FOCUS",
                            websites: websiteList,
                        },
                    });

                    localStorage.removeItem("blockedWebsites");
                    return 0; // Reset remaining time
                }
                return prevTime - 1000; // Decrease by 1 second
            });
        }, 1000);

        setTimerInterval(interval);
    };

    const stopTimer = async () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
        setIsActive(false);
        setRemainingTime(0); // Reset remaining time

        const blockedWebsites: string[] = JSON.parse(localStorage.getItem("blockedWebsites") || "[]");

        try {
            await sendMessageToExtension({
                extensionId: "mllglhblghhnklofafhamhpgpdkomnmo",
                message: {
                    type: "STOP_FOCUS",
                    websites: blockedWebsites,
                },
            });
            localStorage.removeItem("blockedWebsites");
        } catch (error) {
            console.error("Error sending stop message to extension:", error);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isActive) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    useEffect(() => {
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [timerInterval]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Website Blocker</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label htmlFor="websites" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter websites to block (comma separated):
                </label>
                <textarea
                    id="websites"
                    value={websites}
                    onChange={handleInputChange}
                    placeholder="example.com, test.com"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Set Timer (minutes):
                </label>
                <input
                    type="number"
                    id="time"
                    value={time}
                    onChange={handleTimeChange}
                    placeholder="Enter minutes"
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {isActive ? "Stop Timer" : "Start Timer"}
                </button>
            </form>
            {isActive && (
                <div className="bg-yellow-200 text-yellow-800 p-4 rounded">
                    <h2 className="text-lg font-semibold">
                        Time Remaining: {Math.floor(remainingTime / 60000)}m {Math.floor((remainingTime % 60000) / 1000)}s
                    </h2>
                </div>
            )}
        </div>
    );
};
