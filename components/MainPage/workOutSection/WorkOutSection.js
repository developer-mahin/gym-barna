import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const WorkOutSection = () => {

    const secondDanceIcon = {
        background: "linear-gradient(35deg, #DD69C7, #FFC0F3)"
    }

    const stretchingIcon = {
        background: "linear-gradient(50.31deg, #4BACE1, #D8F1FF)"
    }


    const dancingIcon = {
        background: "linear-gradient(45deg, #5478EF, #D6DFFF)"
    }

    return (
        <div className='py-[120px]'>
            <div className='container grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className=''>
                    <div className='relative'>
                        <div>
                            <img src="https://i.ibb.co/x5F69Df/Group-3841-1-1.png" className='image w-3/4' alt="" />
                        </div>
                        <div className='absolute bottom-0 right-[180px]'>
                            <div className=''>
                                <img src="https://i.ibb.co/Tv9y4HQ/image-78.jpg" alt="" />
                            </div>
                        </div>
                        <div
                            style={secondDanceIcon}
                            className="absolute top-0 left-[64px] lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                            <img src="https://i.ibb.co/S6zXfJQ/dancer-motion-1.png" className="drop-shadow-2xl lg:w-auto w-[18px]" alt="" />
                        </div>


                        <div
                            style={stretchingIcon}
                            className="absolute top-1/2 right-[107px] lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                            <img src="https://i.ibb.co/wJ1xcB8/Group.png" className="drop-shadow-2xl lg:w-auto w-[18px]" alt="" />
                        </div>


                        <div className="absolute bottom-[45px] -left-[65px] bg-white drop-shadow-2xl lg:py-[10px] py-[5px] lg:px-5 px-3 rounded-xl flex items-center gap-[14px] w-[109px] lg:w-[187px]">
                            <div
                                style={dancingIcon}
                                className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center"
                            >
                                <img src="https://i.ibb.co/k8zhmTV/crucified-pose.png" className="drop-shadow-2xl lg:w-[35px] w-[16px]" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold lg:text-base text-[10px]">800 kall</h2>
                                <p className="lg:text-[12px] text-[7px] text-[#262524]">Burn fat</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div>
                    <h2 className='text-[46px] font-medium text-[#262524] pb-[30px]'>Best full body <br /> workout to lose fat</h2>
                    <p className='text-[#262524] pb-[50px] text-opacity-[0.5]'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <button className="flex items-center gap-[52px] lg:gap-20 bg-[#264373] text-white py-4 px-4 lg:px-6 rounded-xl drop-shadow-2xl">
                        <span className="text-sm lg:text-base">Get started</span>
                        <IoIosArrowDroprightCircle className="text-xl lg:text-3xl block md:hidden" />
                        <AiOutlineArrowRight className=" md:block hidden text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkOutSection;