import React from 'react'
import Link from 'next/link'
const NavbarComponent = () => {
    return (
        <div className='flex justify-between items-center gap-5 cursor-pointer bg-gray-500 p-2'>
            <Link href="/">
                <div>Logo</div>
            </Link>
            <div className='ml-auto'>Github</div>
            <div>Dark</div>
        </div>
    )
}

export default NavbarComponent
