import '../Help/Help.css';
import cc from '../../../assets/img/capability.svg'
import cc1 from '../../../assets/img/capability_white.svg'
import ct from '../../../assets/img/certainty.svg'
import ct1 from '../../../assets/img/certainty_white.svg'
import tt from '../../../assets/img/trust.svg'
import tt1 from '../../../assets/img/trust_white.svg'
import sp from '../../../assets/img/support.svg'
import sp1 from '../../../assets/img/support_white.svg'

const card = [
    {title: 'Capability & Compatibility', fpic: cc, bpic: cc1, bcon: 'Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.' },
    {title: 'Certainty of Outcome', fpic: ct, bpic: ct1, bcon: 'Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.' },
    {title: 'Trust & Transparency', fpic: tt, bpic: tt1, bcon: 'Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.' },
    {title: 'Handholding & Support', fpic: sp, bpic: sp1, bcon: 'Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.' },
]

export default function HelpYou() {
    return (
        <section className='bg-white h-auto py-7 px-10 md:py-8 md:px-12 xl:py-16 xl:px-20'>
            <div className="text-center pb-2 md:pb-7">
                <p className="text-2xl md:text-3xl xl:text-5xl xl:mb-10 text-center font-circular-medium text-[#121D4B]">How We Can Help You</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 xl:flex xl:flex-row lg:justify-evenly '>
                {card.map((item) =>(
                    <div class="flip w-full h-60 py-5 md:py-1 xl:w-72 xl:h-80">
                    <div class="flip-content ">
                        <div class="flip-front flex flex-col justify-center items-center p-5 gap-10">
                            <img src={item.fpic} alt="cc" className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16'/>
                            <p className='text-xl xl:text-2xl font-semibold font-circular-medium'>{item.title}</p>
                        </div>
                        <div class="flip-back flex flex-col justify-center items-center p-2 gap-5 xl:p-5 xl:gap-10">
                            <img src={item.bpic} alt="cc" className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16'/>
                            <p className='font-circular-medium'>{item.bcon}</p>
                        </div>
                    </div>
                </div>
                ))}
        </div>
        </section>
    )
}