'use client';
import React, { useCallback } from "react";
import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
    const { data } = useBillboard();
    const { openModal } = useInfoModal();

    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);

    return (
        <div className="relative h-[56.25vw]`">
            <video 
                className="w-full h-[56.25vw] object-cover brightness-[60%]"
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl} 
                src={data?.videoUrl}
            ></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white font-bold drop-shadow-xl h-full w-[50%] text-1xl md:text-5xl lg:text-6xl">
                    {data?.title}
                </p>
                <p className="text-white drop-shadow-xl text-8px md:text-lg w-[90%] md:w-[80%] lg:w-[50%] mt-3 md:mt-8">
                    {data?.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                     <PlayButton movieId={data?.id} />
                    <button onClick={handleOpenModal} 
                            className="flex flex-row items-center text-white font-semibold w-auto bg-white bg-opacity-30 hover:bg-opacity-20 rounded-md text-xs lg:text-lg py-1 md:py-2 px-2 md:px-4 transition">
                        <AiOutlineInfoCircle className="mr-1"/>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Billboard;