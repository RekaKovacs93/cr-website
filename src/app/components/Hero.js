import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full mt-10">
            {/* Computer Layout */}
            <div className="hidden md:block items-center">
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
            <div className="h-screen relative md:hidden flex items-center">
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