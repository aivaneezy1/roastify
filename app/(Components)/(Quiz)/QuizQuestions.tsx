"use client";
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import ModalQuizComponent from './ModalQuiz';
import QuizResultComponent from './QuizResult';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
}

const getProgrammingData = (): Question[] => [
    {
        id: 1,
        question: "Which of the following best describes a 'class' in object-oriented programming?",
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

const QuizQuestions = () => {
    const questions: Question[] = getProgrammingData();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(10);
    const [showModal, setShowModal] = useState<boolean>(true); // Modal visibility state
    const [startTime, setStartTimer] = useState<boolean>(false);

    /*SEE if user finished the quiz */
    const isQuizCompleted = currentQuestionIndex >= questions.length;
    /*QUIZ RESULT */
    const [correctAnswer, setCorrectAnswer] = useState<number>(0);
    const [wrongAnswer, setWrongAnswer] = useState<number>(0);
    const percentage = (correctAnswer / questions.length) * 100;


    /*React toastify notification for correct answer */
    const notifyCorrect = () => toast.success('Correct Answer!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    /*React toastify notification for wrong answer */
    const notifyWrong = () => toast.error('Wrong Answer! Try Again.', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const handleAnswerClick = (answer: string) => {
        if (!isAnswered) {
            setIsAnswered(true);
            if (answer === questions[currentQuestionIndex].correctAnswer) {
                setCorrectAnswer(prev => prev + 1);
                notifyCorrect();
            } else {
                setWrongAnswer(prev => prev + 1);
                notifyWrong();
            }
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setIsAnswered(false);
        setTimer(10); // Reset timer for the next question
    };

    const startQuiz = () => {
        setStartTimer(true);
        setShowModal(false); // Hide modal on start
        setTimer(10); // Reset the timer
    }

    useEffect(() => {
        if (timer > 0 && startTime && !isAnswered) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown); // Clear interval on cleanup
        } else if (timer === 0) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswered(false);
            setTimer(10);
        }
    }, [timer, startTime]);

    return (
        <div className="flex flex-col justify-center items-center mt-20 gap-5">
            {/* Modal for welcoming users */}
            {showModal && (
                <ModalQuizComponent startQuiz={startQuiz} />
            )}

            {/* Quiz content */}
            {!showModal && (
                <>
                    {isQuizCompleted ? (
                        <div>
                            <QuizResultComponent
                                correctAnswer={correctAnswer}
                                wrongAnswer={wrongAnswer}
                                percentage={percentage}
                                setCorrectAnswer={setCorrectAnswer}
                                setWrongAnswer={setWrongAnswer}
                                setCurrentQuestionIndex={setCurrentQuestionIndex}
                            />
                        </div>
                    ) : (
                        <>

                            <h2>{timer} seconds to answer</h2>
                            <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
                            <h2>{questions[currentQuestionIndex].question}</h2>
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <div key={index} className="flex flex-col">
                                    <Button
                                        className={isAnswered ?
                                            answer === questions[currentQuestionIndex].correctAnswer ? "bg-green-500" : "bg-red-500" : ""}
                                        onClick={() => handleAnswerClick(answer)}
                                        disabled={isAnswered}
                                    >
                                        {answer}

                                    </Button>
                                </div>


                            ))}
                        </>
                    )}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                    {currentQuestionIndex < questions.length - 1 && (
                        <Button className="mt-5" onClick={handleNextQuestion}>
                            Next Question
                        </Button>

                    )}
                    {currentQuestionIndex == questions.length - 1 && (
                        <Button className="mt-5" onClick={handleNextQuestion}>
                            Finish Quiz
                        </Button>
                    )}
                </>
            )}

        </div>
    );
};

export default QuizQuestions;
