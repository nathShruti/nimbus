import Gold from '../../../assets/img/goldLogo.svg';
import '../Banner/Banner.css';

export default function Banner() {
    return (
        <section>
            <div className="relative"> 
                <div className="w-full bg-bannerBg bg-cover text-center -mt-20 p-32 ">
                    <p className="head text-6xl font-circular-medium text-white my-4">Nimbus Systems<br/>Software Solutions</p>
                    <div class="font-circular-book mt-14 text-4xl [text-wrap:balance] text-white">Solutions to <br/><span class="text-white uppercase inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
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
                    <div className='flex w-auto h-auto justify-end'>
                        <img src={Gold} alt='' className='w-36 h-10' />
                    </div>
                </div>
            </div>
        </section>
    )
}

// absolute -top-20