import React from 'react'
import HeaderComponent from './Header'
import HeroComponent from './Hero'
const LandingPage = () => {
    return (
        <div className="mb-20 flex flex-col justify-center items-center">
            {/*Header Section */}
            <HeaderComponent />
            {/*Hero Section */}
            <HeroComponent />
        </div>
    )
}

export default LandingPage
