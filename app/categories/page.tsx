import React from 'react';
import CategoriesCard from '../(Components)/(CardCategories)/CardCategories';
const categoriesCardDetails = () => {
    return [
        {
            images: '/general.jpg',
            category: 'General Knowledge',
            description: 'Test your knowledge across a wide range of topics!',
            btn: 'Play now',
        },
        {
            images: '/lady.gif',
            category: 'Math',
            description: 'Challenge yourself with mathematical problems.',
            btn: 'Play now',
        },
        {
            images: '/flag.jpg',
            category: 'Guess the flags',
            description: 'Can you guess which country a flag belongs to?',
            btn: 'Play now',
        },
        {
            images: '/lang.jpg',
            category: 'Guess the Language',
            description: 'Identify languages from around the world.',
            btn: 'Play now',
        },
        {
            images: '/facts.webp',
            category: 'Weird Facts',
            description: 'Discover the strangest facts from around the globe.',
            btn: 'Play now',
        },
    ];
};

const Categoriespage = () => {
    const categories = categoriesCardDetails();

    return (
        <div className='flex flex-col justify-center items-center mt-[100px]'>
            <h2 className='text-6xl font-bold text-center'>Select a category</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[100px] gap-10 text-center'>
                {categories.map((category, index) => (
                    <div key={index} className='transform transition duration-300 hover:scale-105'>
                        <CategoriesCard
                            images={category.images}
                            category={category.category}
                            description={category.description}
                            btn={category.btn}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categoriespage;
