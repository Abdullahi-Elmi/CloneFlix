import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard:React.FC<MovieCardProps> = ({ data }) => {
    return (
        <div className='group relative col-span bg-zinc-900 h-[12vw]'>
            
            <img className='w-full h-[12vw] transition duration delay-300 cursor-pointer object-cover rounded-md shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0' src={data.thumbnailUrl} alt="Thumbnail" />
            
            <div className='w-full absolute opacity-0 invisible transition duration-200 delay-300 top-0 z-10 sm:visible scale-0 
                            group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
                
                <img className='w-full h-[12vw] transition duration cursor-pointer object-cover rounded-t-md ' src={data.thumbnailUrl} alt="Thumbnail" />

                <div className='w-full absolute transition bg-zinc-800 z-10 p-2 lg:p-4 shadow-md rounded-b-md'>

                    <div className='flex flex-row items-center gap-3'>
                        <div onClick={() => {}} className='flex justify-center items-center transition cursor-pointer bg-white w-6 lg:w-10 h-6 lg:h-10 rounded-full hover:bg-neutral-300'>
                            <BsFillPlayFill size={30}/>
                        </div>
                        <FavoriteButton movieId={data.id} />
                    </div>

                    <p className='text-green-400 font-semibold mt-4'>
                        New <span className='text-white'>2023</span>
                    </p>

                    <div className='flex flex-row items-center gap-2 mt-4'>
                        <p className='text-white text-[10px ] lg:text-sm'>{data.duration}</p>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-4'>
                        <p className='text-white text-[10px ] lg:text-sm'>{data.genre}</p>
                    </div> 

                </div>
            </div>
        </div>
    )
}
export default MovieCard; 