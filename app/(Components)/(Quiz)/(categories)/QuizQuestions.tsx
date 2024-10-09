"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export interface questionsProps {
    id: number;
    question: string;
    answers: string[]; // Allows an array of strings
    correctAnswer: string;
}

export const getProgrammingData = (): questionsProps[] => {
    return [
        {
            id: 1,
            question:
                "Which of the following best describes a 'class' in object-oriented programming?",
            answers: [
                "A blueprint for creating objects",
                "A function that returns a value",
                "A variable that stores multiple values",
                "A type of loop used for iteration",
            ],
            correctAnswer: "A blueprint for creating objects",
        },
        {
            id: 2,
            question: "What does the term 'recursion' mean in programming?",
            answers: [
                "A function that calls itself",
                "A loop that runs indefinitely",
                "A type of sorting algorithm",
                "A variable that can change its value",
            ],
            correctAnswer: "A function that calls itself",
        },
        {
            id: 3,
            question: "Which of the following is a characteristic of a 'linked list'?",
            answers: [
                "Elements are stored in contiguous memory locations",
                "Each element points to the next element",
                "Elements are indexed starting from zero",
                "Data is stored in a tabular format",
            ],
            correctAnswer: "Each element points to the next element",
        },
        {
            id: 4,
            question: "What is the primary difference between a 'stack' and a 'queue'?",
            answers: [
                "A stack is LIFO (Last In, First Out), while a queue is FIFO (First In, First Out)",
                "A stack is FIFO (First In, First Out), while a queue is LIFO (Last In, First Out)",
                "A stack uses pointers, while a queue does not",
                "A stack allows random access, while a queue does not",
            ],
            correctAnswer: "A stack is LIFO (Last In, First Out), while a queue is FIFO (First In, First Out)",
        },
        // More questions here...
    ];
};

const QuizQuestions = () => {
    const questions = getProgrammingData();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    const handleAnswerClick = (answer: string) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setIsAnswered(true);

            // Automatically move to the next question after 1 second
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setSelectedAnswer(null);
                    setIsAnswered(false);
                }
            }, 2000); // Delay for showing the colors before moving to the next question
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20 gap-5">
            <h2>10 seconds to answer</h2>
            <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
            <h2>{questions[currentQuestionIndex].question}</h2>

            {questions[currentQuestionIndex].answers.map((answer, indx) => (
                <div key={indx} className="flex flex-col">
                    <Button
                        className={`${isAnswered
                            ? answer === questions[currentQuestionIndex].correctAnswer
                                ? "bg-green-500"
                                : "bg-red-500" // Make all wrong answers red
                            : ""
                            }`}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={isAnswered} // Disable button after selecting an answer
                    >
                        {answer}
                    </Button>
                </div>
            ))}

            {currentQuestionIndex < questions.length - 1 && (
                <Button className="mt-5" onClick={() => setIsAnswered(false)}>
                    Next Question
                </Button>
            )}
        </div>
    );
};

export default QuizQuestions;
