import video1 from "../../../assets/videoSample.mp4";
import poster from "../../../assets/img/poster.svg"
import React from 'react';
import ReactPlayer from 'react-player';
import Counter from "./Counter";

export default function VideoCounter() {
    return(
        <section className="bg-white h-auto">
            <div className='flex justify-center'>
                <div className='w-full h-40 md:w-3/5 md:h-52 lg:w-3/5 lg:h-80 xl:h-96'>
                    <ReactPlayer
                        url={video1}
                        controls={true}
                        width="100%"
                        height="100%"
                        light={poster}
                    />
                </div>
            </div>
            <div className="bg-counter bg-cover w-full h-auto md:h-72 lg:h-80 -mt-20 lg:-mt-28 xl:-mt-32"> 
                <Counter />
            </div>
        </section>
    )
}

