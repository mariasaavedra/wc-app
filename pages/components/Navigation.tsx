import Link from "next/link"
import { useState } from "react";

export const Navigation = () => {

    const [active, setActive] = useState(false);
    
    const handleClick = () => {
        console.log('clicked')
    setActive(!active);
  };



    return (
        <nav className="navigation px-2">
            <div className="p-px lg:px-10 mx-auto">
                <div className="nav-desktop-container flex justify-between">
                    <div className="logo-container flex items-center">
                        <Link href='/'>
                            <a className="logo-link w-3/5 lg:w-full flex justify-start md:items-center py-2">
                                <img className="logo-image h-full w-full" src="http://localhost:3000/images/logo.png"></img>{" "}
                            </a>
                        </Link>
                    </div>
                    <div className="hidden desktop-menu lg:flex items-center space-x-1" >
                        <Link href='/programs'>
                            <a className="py-4 px-3 text-lg font-semibold hover:text-brand-purple">PROGRAMS</a>
                        </Link>
                        <Link href='/events'>
                            <a className="py-4 px-3 text-lg font-semibold hover:text-brand-purple">EVENT</a>
                        </Link>
                        <Link href='/aboutus'>
                            <a className="py-4 px-3 text-lg font-semibold hover:text-brand-purple">ABOUT US</a>
                        </Link>
                        <Link href='#'>
                            <a className="py-3 px-3 text-lg font-semibold bg-brand-gold text-white rounded-full hover:text-black">DONATE</a>
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button 
                            className="mobile-menu-button"
                            onClick={handleClick}
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>    
                </div>
            </div>   


            <div className={`${active ? '' : 'hidden'} "h-screen mobile-menu bg-brand-blue z-50"`}>
                <Link href='/programs'>
                    <a className="block py-2 px-4 text-lg font-semibold text-white border-b-2">PROGRAMS</a>
                </Link>
                <Link href='/events'>
                    <a className="block py-2 px-4 text-lg font-semibold text-white border-b-2">EVENT</a>
                </Link>
                <Link href='/about-us'>
                    <a className="block py-2 px-4 text-lg font-semibold text-white border-b-2">ABOUT US</a>
                </Link>
                <Link href='#'>
                    <a className="block py-2 px-4 text-lg font-semibold text-white border-b-2">DONATE</a>
                </Link>  
             </div>    
        </nav>

       
    )
}
