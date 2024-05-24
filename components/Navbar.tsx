'use client';

import { useCallback, useEffect, useState } from "react";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div className={`flex flex-row items-center px-4 py-6 md:px-16 transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                
                <img className="h-4 lg:h-7" src="/images/cloneflix.png" alt="The cloneflix logo" />
                
                <div className="hidden lg:flex flex-row ml-8 gap-7">
                    <NavbarItem label="Home" />
                    <NavbarItem label="TV Shows" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>

                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center relative cursor-pointer gap-2 ml-8">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu}/>
                </div>

                <div className="flex flex-row items-center ml-auto gap-7">
                    
                    <div className="text-gray-200 hover:text-gray-300 transition cursor-pointer">
                        <BsSearch /> 
                    </div>
                    
                    <div className="text-gray-200 hover:text-gray-300 transition cursor-pointer ">
                        <BsBell /> 
                    </div>

                    <div onClick={toggleAccountMenu} className="flex flex-row items-center relative cursor-pointer gap-2">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/profile_icon.png" alt="Profile picture" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;