import Gold from '../../../assets/img/goldLogo.svg';
import '../Banner/Banner.css';

export default function Banner() {
    return (
        <section>
            <div className="relative"> 
                <div className="w-full bg-bannerBg bg-cover p-5 lg:text-center lg:-mt-20 lg:px-14 lg:pt-16 lg:pb-10 xl:-mt-20 xl:pt-28 xl:pb-14 xl:px-20 ">
                    <p className="head text-3xl pt-5 md:text-4xl lg:text-5xl xl:text-6xl font-circular-medium text-white lg:my-4">Nimbus Systems<br/>Software Solutions</p>
                    <div class="font-circular-book text-lg md:text-2xl mt-8 lg:text-3xl lg:mt-10 xl:mt-14 xl:text-4xl [text-wrap:balance] text-white">Solutions to <br/><span class="text-white uppercase inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] xl:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                        <ul class="block animate-text-slide-7 text-center leading-tight [&_li]:block">
                            <li>Automobile Dealerships</li>
                            <li>Gems & Jewellery</li>
                            <li>Retail & eCommerce</li>
                            <li>Manufacturing & Mining</li>
                            <li>Healthcare</li>
                            <li>Media and Entertainment</li>
                            <li>ITES</li>
                            <li aria-hidden="true">Automobile Dealerships</li>
                        </ul>
                    </span></div>
                    <div className='flex w-auto h-auto p-10 lg:py-6 justify-center md:justify-end lg:justify-end'>
                        <img src={Gold} alt='' className='w-24 h-7 lg:w-36 lg:h-10 xl:w-48 xl:h-20' />
                    </div>
                </div>
            </div>
        </section>
    )
}

// absolute -top-20