'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";


const Watch = ({ params }: { params: { movieId: string } }) => {
    const router = useRouter();
    const { movieId } = params;

    const { data } = useMovie(movieId);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="flex flex-row items-center fixed w-full bg-black bg-opacity-70 gap-8 p-4 z-10">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer" size={40} />
                <p className="text-white font-bold text-1xl md:text-3xl">
                    <span className="font-light">
                        Watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video autoPlay controls src={data?.videoUrl} className="h-full w-full" ></video>
        </div>
    )
}

export default Watch;