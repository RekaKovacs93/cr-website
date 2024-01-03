import Image from "next/image";
import gsap from "gsap";

export default function Hero() {

    gsap.from("p", {
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    })

    // gsap.staggerFrom("nav ul li", 1, {
    //     opacity: 0,
    //     x: -20,
    //     ease: Power3.easeInOut
    // }, 0.08)


    return (
        <div className="w-full">
            {/* Computer Layout */}
            <div className="hidden md:flex items-center justify-center">

                    <div id="line-one"></div>
                    <div id="line-two"></div>

                <div className='flex text-7xl mt-40  items-center'>
                    <p className=' hover:text-9xl'>C</p>
                    <p className=' hover:text-9xl'>S</p>
                    <p className=' hover:text-9xl'>E</p>
                    <p className=' hover:text-9xl'>N</p>
                    <p className=' hover:text-9xl'>G</p>
                    <p className=' hover:text-9xl'>I</p>
                </div>
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