import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import prev from "../../../assets/img/left-arrow.png"
// import next from "../../../assets/img/right-arrow.png"
import u1 from "../../../assets/img/client1.jpg";
import u2 from "../../../assets/img/client2.jpg";
import u3 from "../../../assets/img/client3.jpg";
import u4 from "../../../assets/img/client4.jpg";
import './Carousel.css';

class DemoCarousel extends Component {
    render() {
        return (
            <div>
            <Carousel className="car-large" transitionTime={1000} showStatus={false} showIndicators={false} swipeable={true} autoPlay={false} showThumbs={false}>
                <div className="grid grid-cols-2 justify-center items-center">
                <div className="h-52 border-r-2 border-b-2 border-dashed">
                    <div className="flex flex-row py-3 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u1} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                <div className="h-52 border-b-2 border-dashed">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u2} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>  
                    </div>
                </div>
                <div className="h-52 border-r-2 border-dashed">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u3} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                <div className="h-52">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u4} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 pt gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 justify-center items-center">
                <div className="h-52 border-r-2 border-b-2 border-dashed">
                    <div className="flex flex-row py-3 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u1} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                <div className="h-52 border-b-2 border-dashed">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u2} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>  
                    </div>
                </div>
                <div className="h-52 border-r-2 border-dashed">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u3} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                <div className="h-52">
                    <div className="flex flex-row py-4 px-2">
                        <div className="flex flex-col m-2 w-20 h-20">
                            <img src={u4} className=" rounded-full w-20 h-20" alt="user"/>
                        </div>
                        <div className="flex flex-col w-96 p-2 pt gap-5">
                            <article className="text-left text-sm font-circular-book">
                                <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                                <div className="text-[#121D4B]">Martha M. Masters</div>
                                <div>Marketing–WikiTravel</div>
                            </article>
                        </div>    
                    </div>
                </div>
                </div>
            </Carousel>
            <Carousel className="car-small" transitionTime={1000} showStatus={false} showIndicators={true} swipeable={true} autoPlay={false} showThumbs={false}>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-72 md:w-11/12 md:pl-6 lg:py-4 lg:px-2">
                    <div className="flex flex-col m-2 w-14 h-14 md:w-20 md:h-20 md:m-3">
                        <img src={u1} className=" rounded-full w-14 h-14 md:w-20 md:h-20" alt="user"/>
                    </div>
                    <div className="flex flex-col w-56 md:w-4/5 p-2 gap-5">
                        <article className="md:text-left text-sm font-circular-book">
                            <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                            <div className="text-[#121D4B]">Martha M. Masters</div>
                            <div>Marketing–WikiTravel</div>
                        </article>
                    </div>    
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-72 md:w-11/12 md:pl-6 lg:py-4 lg:px-2">
                    <div className="flex flex-col m-2 w-14 h-14 md:w-20 md:h-20 md:m-3">
                        <img src={u2} className=" rounded-full w-14 h-14 md:w-20 md:h-20" alt="user"/>
                    </div>
                    <div className="flex flex-col w-56 md:w-4/5 p-2 gap-5">
                        <article className="md:text-left text-sm font-circular-book">
                            <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                            <div className="text-[#121D4B]">Martha M. Masters</div>
                            <div>Marketing–WikiTravel</div>
                        </article>
                    </div>    
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-72 md:w-11/12 md:pl-6 lg:py-4 lg:px-2">
                    <div className="flex flex-col m-2 w-14 h-14 md:w-20 md:h-20 md:m-3">
                        <img src={u3} className=" rounded-full w-14 h-14 md:w-20 md:h-20" alt="user"/>
                    </div>
                    <div className="flex flex-col w-56 md:w-4/5 p-2 gap-5">
                        <article className="md:text-left text-sm font-circular-book">
                            <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                            <div className="text-[#121D4B]">Martha M. Masters</div>
                            <div>Marketing–WikiTravel</div>
                        </article>
                    </div>    
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-72 md:w-11/12 md:pl-6 lg:py-4 lg:px-2">
                    <div className="flex flex-col m-2 w-14 h-14 md:w-20 md:h-20 md:m-3">
                        <img src={u4} className=" rounded-full w-14 h-14 md:w-20 md:h-20" alt="user"/>
                    </div>
                    <div className="flex flex-col w-56 md:w-4/5 p-2 gap-5">
                        <article className="md:text-left text-sm font-circular-book">
                            <p class="line-clamp-5 mb-5">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
                            <div className="text-[#121D4B]">Martha M. Masters</div>
                            <div>Marketing–WikiTravel</div>
                        </article>
                    </div>    
                </div>
                
            
            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel;