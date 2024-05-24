'use client';
import React from "react";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
    if(!visible) return null; 
    return (
        <div className="flex flex-col absolute bg-black w-56 py-5 top-14 right-0 border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                
                <div className="flex flex-row items-center group/item w-full px-3 gap-3">
                    <img className="w-8 rounded-md" src="/images/profile_icon.png" alt="Profile picture" />
                    <p className="text-white text-sm group-hover/item:underline">
                        Username
                    </p>
                </div>
                
                <hr className="bg-gray-600 border-0 h-px my-4" />

                <div onClick={() => signOut()} className="text-white text-sm text-center px-3 hover:underline">
                    Sign Out of Cloneflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;