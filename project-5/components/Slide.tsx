import React from 'react';
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[700px]'>
      {/* Content hidden on all screens */}
      <div className="hidden">
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[30px] lg:text-[44px] sm:text-[20px] font-bold leading-[1.2]'>
          {mainTitle}
        </h2>
        <h3 className='text-[24px] text-gray-500'>
          starting at {" "}
          <b className='md:text-[24px] text-[20px] lg:text-[30px]'>{price}</b>.00
        </h3>
        <div className='bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block
        cursor-pointer hover:bg-blackish'>
          Shop Now
        </div>
      </div>
      
      {/* Simplified Image Container */}
      <div className="relative w-full h-full">
        <Image 
          src={img} 
          alt='banner' 
          layout='fill'
          className='object-cover' 
          priority 
        />
      </div>
    </div>
  );
};

export default Slide;
