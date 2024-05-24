'use client';
import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible) return null;

    return (
        <div className="flex flex-col absolute bg-black w-56 top-8 left-0 py-5 border-2 border-gray-800">
            <div className="flex flex-col gap-4">

                <div className="text-white text-center px-3 hover:underline">
                    Home
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    TV Shows
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    Movies
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    New & Popular
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    My List
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    Browse by Languages
                </div>
            </div>
        </div>
    )
}
export default MobileMenu;