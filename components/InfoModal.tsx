'use client';
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState(!!visible);
    
    const { movieId } = useInfoModal();
    const { data = {} } = useMovie(movieId); 
    
    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className="flex justify-center items-center fixed transition duration-300 bg-black bg-opacity-80 overflow-x-hidden overflow-y-auto z-50 inset-0">
            <div className="relative rounded-md overflow-hidden w-auto mx-auto max-w-3xl">
                <div className={`
                    ${isVisible ? 'scale-100' : 'scale-0'} flex-auto relative transform duration-300 bg-zinc-900 drop-shadow-md
                `}>
                    <div className="relative h-96">
                        
                        <video autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl} className="w-full h-full object-cover brightness-[60%]"></video>
                        
                        <div onClick={handleClose} className="flex items-center justify-center absolute cursor-pointer rounded-full bg-black bg-opacity-70 w-10 h-10 top-3 right-3">
                            <AiOutlineClose className="text-white" size={20} />
                        </div>

                        <div className="absolute left-10 bottom-[10%]">
                            <p className="h-full text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
                                {data?.title}
                            </p>
                            <div className="flex flex-row items-center gap-4">
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>

                    </div>

                    <div className="px-12 py-8">
                        <p className="text-green-400 text-lg font-semibold">
                            New
                        </p>
                        <p className="text-white text-lg">
                            {data?.duration}
                        </p>
                        <p className="text-white text-lg">
                            {data?.genre}
                        </p>
                        <p className="text-white text-lg">
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoModal;