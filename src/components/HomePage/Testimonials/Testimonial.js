

import DemoCarousel from "./Carousel";

export default function Testimonial() {
    return (
        <section className="h-96 md:h-auto lg:h-auto bg-testbg py-8 lg:py-16 lg:px-28">
            <div>
                <p className="text-3xl lg:text-4xl mb-7 text-center font-circular-medium text-[#121D4B]">Testimonial</p>
            </div>
            <DemoCarousel />
        </section>
    )
}
