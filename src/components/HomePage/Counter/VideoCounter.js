import video1 from "../../../assets/videoSample.mp4";
import poster from "../../../assets/img/poster.svg"
import React from 'react';
import ReactPlayer from 'react-player';
import Counter from "./Counter";

export default function VideoCounter() {
    return(
        <section className="bg-white h-auto">
            <div className='flex justify-center'>
                <div className='w-3/5 h-80'>
                    <ReactPlayer
                        url={video1}
                        controls={true}
                        width="100%"
                        height="100%"
                        light={poster}
                    />
                </div>
            </div>
            <div className="bg-counter bg-cover w-full h-80 -mt-32"> 
                <Counter />
            </div>
        </section>
    )
}

