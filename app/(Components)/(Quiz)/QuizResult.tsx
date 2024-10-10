"use client"
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useContext } from 'react';
import { DatiContext } from '@/app/providers/DataProvider';
interface QuizResultComponentProps {
    correctAnswer: number;
    wrongAnswer: number;
    percentage: number;
    setCorrectAnswer: Dispatch<SetStateAction<number>>;
    setWrongAnswer: Dispatch<SetStateAction<number>>; // Updated to be a Dispatch function for wrong answers
    setCurrentQuestionIndex: Dispatch<SetStateAction<number>>
}

const QuizResultComponent = ({ correctAnswer, wrongAnswer, percentage, setCorrectAnswer, setWrongAnswer, setCurrentQuestionIndex }: QuizResultComponentProps) => {



    // Function to get the appropriate meme image based on the score
    const getMemeImage = () => {
        if (percentage < 50) {
            return "/lady.gif"; // Replace with your low-score meme path
        } else if (percentage < 80) {
            return "/lang.jpg"; // Replace with your average meme path
        } else {
            return "/gojo.jpg"; // Replace with your high-score meme path
        }
    };

    const handlePlayAgain = () => {
        setCurrentQuestionIndex(0)
        setCorrectAnswer(0);
        setWrongAnswer(0);
        percentage = 0;
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Thank you for playing!</h2>
            <h2 className="text-lg font-semibold">Correct: <span className="text-green-600">{correctAnswer}</span></h2>
            <h2 className="text-lg font-semibold">Wrong: <span className="text-red-600">{wrongAnswer}</span></h2>
            <h2 className="text-lg font-semibold">Score: <span className="text-blue-600">{percentage}%</span></h2>

            {/* Conditional Rendering of Meme Image */}
            <div className="relative w-full h-48 mt-4 mb-4"> {/* Set dimensions for Image */}
                <Image
                    src={getMemeImage()} // Dynamically get meme based on score
                    alt="Meme based on score"
                    layout="fill" // Make it fill the container
                    objectFit="contain" // Maintain aspect ratio
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className='flex flex-row gap-5'>

                <Button onClick={() => handlePlayAgain()}>Play Again</Button>

                <Link href="/categories">
                    <Button>Change Categories</Button>
                </Link>
            </div>
        </div>
    );
}

export default QuizResultComponent;
