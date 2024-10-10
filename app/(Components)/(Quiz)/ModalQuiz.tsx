"use client"
import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import CategoriesCard from '../(CardCategories)/CardCategories';
import Image from 'next/image';
import { DatiContext } from '@/app/providers/DataProvider';
import Link from 'next/link';
type ModalQuizProps = {
    startQuiz: () => void;  // Function type with no arguments and a void return
};
const ModalQuizComponent = ({ startQuiz }: ModalQuizProps) => {
    const { selectedCategories } = useContext(DatiContext)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 text-center relative">

                <div className="relative w-full h-48 mb-6">  {/* Set relative dimensions for Image */}
                    <Image
                        src="/startQuiz.jpg"  // Replace with your actual image path
                        alt="Let's get started meme"
                        layout="fill"
                        className="rounded-lg shadow-lg"

                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to the Quiz!</h2>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Category: {selectedCategories}</h2>
                <p className="text-gray-600 mb-4">You have 10 questions. Each question gives you 10 seconds to answer. If you fail, you will get roasted!</p>
                <p className="text-gray-500">Click the button below to start playing.</p>
                <div className='gap-5 flex flex-row justify-center items-center '>
                    <Button
                        onClick={startQuiz}
                        className="mt-6  text-white font-semibold py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105  "
                    >

                        Start Quiz
                    </Button>

                    <Link href="/categories">
                        <Button

                            className="mt-6  text-white font-semibold py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105"
                        >

                            Change Category
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ModalQuizComponent
