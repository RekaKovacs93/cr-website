'use client'

import gsap from 'gsap';
import { useEffect } from 'react';

export default function Hero() {

    useEffect(() => {
        gsap.to(".logo", { opacity: 1, duration: 0.5 });
        const tl = gsap.timeline();
        tl.to("#line-one", { opacity: 1, duration: 0.5 }, 2);
        tl.to("#line-two", { opacity: 1, duration: 1 });
        tl.to('.circle', { opacity: 1, duration: 1} , 3)

        const rotationTl = gsap.to('.circle', {rotate: 360, transformOrigin: 'center', repeat: -1, duration: 5, ease: "none" });
        tl.add(rotationTl, 4);
      }, [])



    return (
        <div className="w-full">
            {/* Computer Layout */}
            <div className="hidden md:flex items-center justify-center">

                    <div id="line-one" className="opacity-0"></div>
                    <div id="line-two" className="opacity-0"></div>

                <div className='logo opacity-0 flex text-7xl mt-40 items-center'>
                    <p className='letters hover:text-9xl'>C</p>
                    <p className='letters hover:text-9xl'>S</p>
                    <p className='letters hover:text-9xl'>E</p>
                    <p className='letters hover:text-9xl'>N</p>
                    <p className='letters hover:text-9xl'>G</p>
                    <p className='letters hover:text-9xl'>I</p>
                </div>
                <svg width="300" height="300">
                    <path id="circlePath" d="M150 50 A 100 100 0 0 1 250 150 A 100 100 0 0 1 150 250 A 100 100 0 0 1 50 150 A 100 100 0 0 1 150 50" fill="none" stroke="transparent" />
                    <text className='letters circle opacity-0'>
                        <textPath href="#circlePath" className='text-3xl'>
                        REKA AND CSENGI MAKE COOL STUFF**
                        </textPath>
                    </text>
                </svg>


            </div>
            {/* Mobile and Tablet Layout */}
            <div className="h-screen md:hidden flex items-center">
            <div className='flex text-7xl mt-40'>
                    <p className=' hover:text-9xl'>C</p>
                    <p className=' hover:text-9xl'>S</p>
                    <p className=' hover:text-9xl'>E</p>
                    <p className=' hover:text-9xl'>N</p>
                    <p className=' hover:text-9xl'>G</p>
                    <p className=' hover:text-9xl'>I</p>
                </div>
            </div>

        </div>
    );
}