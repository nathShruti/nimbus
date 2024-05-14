import '../Help/Help.css';
import cc from '../../../assets/img/capability.svg'
import cc1 from '../../../assets/img/capability_white.svg'
import ct from '../../../assets/img/certainty.svg'
import ct1 from '../../../assets/img/certainty_white.svg'
import tt from '../../../assets/img/trust.svg'
import tt1 from '../../../assets/img/trust_white.svg'
import sp from '../../../assets/img/support.svg'
import sp1 from '../../../assets/img/support_white.svg'

export default function HelpYou() {
    return (
        <section className='bg-white h-screen py-16 px-20'>
            <div className="text-center">
                <p className="text-4xl mb-14 text-center font-circular-medium text-[#121D4B]">How We Can Help You</p>
            </div>
            <div className='flex flex-row justify-evenly'>
            <div class="flip">
                <div class="flip-content ">
                    <div class="flip-front flex flex-col justify-center items-center p-5 gap-10">
                        <img src={cc} alt="cc" className='w-16 h-16'/>
                        <p className='text-2xl font-semibold font-circular-medium'>Capability & Compatibility</p>
                    </div>
                    <div class="flip-back flex flex-col justify-center items-center p-5 gap-10">
                        <img src={cc1} alt="cc" className='w-16 h-16'/>
                        <p className='font-circular-medium'>Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.</p>
                    </div>
                </div>
            </div>
            <div class="flip">
                <div class="flip-content ">
                    <div class="flip-front flex flex-col justify-center items-center p-5 gap-10">
                        <img src={ct} alt="cc" className='w-16 h-16'/>
                        <p className='text-2xl font-semibold font-circular-medium'>Certainty of Outcome</p>
                    </div>
                    <div class="flip-back flex flex-col justify-center items-center p-5 gap-10">
                        <img src={ct1} alt="cc" className='w-16 h-16'/>
                        <p className='font-circular-medium'>Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.</p>
                    </div>
                </div>
            </div>
            <div class="flip">
                <div class="flip-content ">
                    <div class="flip-front flex flex-col justify-center items-center p-5 gap-10">
                        <img src={tt} alt="cc" className='w-16 h-16'/>
                        <p className='text-2xl font-semibold font-circular-medium'>Trust & Transparency</p>
                    </div>
                    <div class="flip-back flex flex-col justify-center items-center p-5 gap-10">
                        <img src={tt1} alt="cc" className='w-16 h-16'/>
                        <p className='font-circular-medium'>Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.</p>
                    </div>
                </div>
            </div>
            <div class="flip">
                <div class="flip-content ">
                    <div class="flip-front flex flex-col justify-center items-center p-5 gap-10">
                        <img src={sp} alt="cc" className='w-16 h-16'/>
                        <p className='text-2xl font-semibold font-circular-medium'>Handholding & Support</p>
                    </div>
                    <div class="flip-back flex flex-col justify-center items-center p-5 gap-10">
                        <img src={sp1} alt="cc" className='w-16 h-16'/>
                        <p className='font-circular-medium'>Nimbus is a team of 100+ software professionals with 500+ satisfied customers across seven countries.</p>
                    </div>
                </div>
            </div>
            
        </div>
        </section>
    )
}