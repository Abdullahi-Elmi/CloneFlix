'use client';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from "next/navigation";

interface PlayButtonProps {
    movieId: string; 
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    const router = useRouter();

    return (
        <button onClick={() => router.push(`/watch/${movieId}`)} className="flex flex-row items-center bg-white rounded-md font-semibold text-xs lg:text-lg w-auto py-1 md:py-2 px-2 md:px-4 transition hover:bg-neutral-300">
            {/* <BsFillPlayFill className="text-white text-3xl" /> */}
            <BsFillPlayFill className='mr-1' size={25} />
            Play
        </button>
    );
};

export default PlayButton;