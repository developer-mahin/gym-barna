import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ThirdSection = () => {
    return (
        <div className='container'>
            <div className='bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-[30px] lg:p-[86px] px-[28px] py-[34px] grid lg:grid-cols-3 grid-cols-1 justify-items-center items-center lg:gap-[80px] gap-[40px]'>
                <div className='grid grid-cols-3 items-center gap-[30px]'> 
                    <div className='lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] bg-[#FFFFFF] bg-opacity-[0.2] rounded-[20px] flex justify-center items-center'>
                        <img src="https://i.ibb.co/k8zhmTV/crucified-pose.png" alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[#FFFFFF] lg:text-xl text-base font-semibold'>Get that 11 line in 30 days</p>
                        <p className='flex items-center gap-4 text-[#fff] text-opacity-[0.5] lg:mt-4 mt-2'>
                            <span>Learn more</span>
                            <AiOutlineArrowRight />
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-3 items-center gap-[30px]'> 
                    <div className='lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] bg-[#FFFFFF] bg-opacity-[0.2] rounded-[20px] flex justify-center items-center'>
                        <img src="https://i.ibb.co/VYHBjgm/dancer-balance-posture-on-one-leg.png" alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[#FFFFFF] lg:text-xl text-base font-semibold'>14 Days
                            sherd challenge</p>
                        <p className='flex items-center gap-4 text-[#fff] text-opacity-[0.5] lg:mt-4 mt-2'>
                            <span>Learn more</span>
                            <AiOutlineArrowRight />
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-3 items-center gap-[30px]'> 
                    <div className='lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] bg-[#FFFFFF] bg-opacity-[0.2] rounded-[20px] flex justify-center items-center'>
                        <img src="https://i.ibb.co/Z6qQWk1/dancer-motion.png" alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[#FFFFFF] lg:text-xl text-base font-semibold'>Get flat belly in 30 days</p>
                        <p className='flex items-center gap-4 text-[#fff] text-opacity-[0.5] lg:mt-4 mt-2'>
                            <span>Learn more</span>
                            <AiOutlineArrowRight />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;