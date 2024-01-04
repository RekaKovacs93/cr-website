'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Hero() {

    useEffect(() => {
        const logotl = gsap.timeline();
        logotl.to(".letters-1", { opacity: 1, duration: 0.5 });
        logotl.to(".letters-2", { opacity: 1, duration: 0.5 });
        logotl.to(".letters-3", { opacity: 1, duration: 0.5 });
        logotl.to(".letters-4", { opacity: 1, duration: 0.5 });
        logotl.to(".letters-5", { opacity: 1, duration: 0.5 });
        logotl.to(".letters-6", { opacity: 1, duration: 0.5 });
        logotl.to(".spark", {opacity : 1, transformOrigin: 'center', duration:1, ease: "none",})
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

                    <div id="line-one" className="opacity-0 "></div>
                    <div id="line-two" className="opacity-0 "></div>

                <div className='logo  flex text-7xl mt-40 items-center ml-20'>
                    <p className='letters-1 opacity-0 hover:text-9xl'>C</p>
                    <p className='letters-2 opacity-0 hover:text-9xl'>S</p>
                    <p className='letters-3 opacity-0 hover:text-9xl'>E</p>
                    <p className='letters-4 opacity-0 hover:text-9xl'>N</p>
                    <p className='letters-5 opacity-0 hover:text-9xl'>G</p>
                    <p className='letters-6 opacity-0 hover:text-9xl'>I</p>
                </div>
                <div>
                    <Image
                        className='spark opacity-0'
                        alt="spark"
                        src="https://cdn3.iconfinder.com/data/icons/star-accents/32/star-set-expand-app-46-1024.png"
                        width="100"
                        height="100">
                    </Image>
                </div>
                <svg width="300" height="300">
                    <path id="circlePath" d="M150 50 A 100 100 0 0 1 250 150 A 100 100 0 0 1 150 250 A 100 100 0 0 1 50 150 A 100 100 0 0 1 150 50" fill="none" stroke="transparent" />
                    <text className='logo circle opacity-0'>
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