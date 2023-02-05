import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";



const Banner = () => {

    const pushUpPractice = {
        background: "linear-gradient(45.98deg, #5478EF, #D6DFFF)"
    }

    const danceIcon = {
        background: "linear-gradient(45deg, #F8A422, #FEDEAC)"
    }

    const stretchingIcon = {
        background: "linear-gradient(50.31deg, #4BACE1, #D8F1FF)"
    }


    return (
        <div className="bg-gradient-to-r from-[#FCF2EF] to-[#FEFDFF] lg:pt-[194px] pt-[60px] pb-[60px]">
            <div className="container grid md:grid-cols-2 grid-cols-1 gap-32 items-end">
                <div>
                    <h2 className="lg:text-[56px] text-[28px] text-[#262524] font-semibold lg:font-medium lg:leading-[65px] tracking-wide">Healthy in side <br /> <span className="text-[#8382EB]">fresh</span> out side</h2>
                    <div className="py-6">
                        <p className="text-[#262524] text-opacity-[0.6] lg:text-base text-[12px] lg:w-[492px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-9">
                        <button className="flex items-center gap-7 lg:gap-20 bg-[#264373] text-white py-4 px-4 lg:px-6 rounded-xl drop-shadow-2xl">
                            <span className="text-[12px] lg:text-base">Get started</span>
                            <IoIosArrowDroprightCircle className="text-xl lg:text-3xl" />
                        </button>
                        <button className="flex items-center bg-[#fff] gap-1 lg:gap-4 py-4 px-4 lg:px-6 rounded-xl drop-shadow-2xl">
                            <AiFillPlayCircle className="text-xl lg:text-3xl text-[#264373]"></AiFillPlayCircle>
                            <span className="text-[#264373] text-[12px] lg:text-base">Learn more</span>
                        </button>
                    </div>
                    <div className="mt-[51px]">
                        <p className="mb-[29px] lg:text-base text-[12px]">Brands: </p>
                        <div className="grid grid-cols-4 gap-6 lg:gap-[50px] items-center">
                            <div>
                                <img src="https://i.ibb.co/vZmT6tD/Mask-Group.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/4snfzmJ/Mask-Group-1.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/wgVNZNd/Mask-Group-2.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/F3vRTPf/Mask-Group-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[72px] lg:mt-[0px]">
                    <div className="">
                        <div className="h-[430px] float-right">
                            <img
                                src="https://i.ibb.co/tK4Bjfy/Ellipse-136-1.png"
                                className="h-[430px]"
                                alt="" />
                        </div>
                        <div className="absolute bottom-0 right-5">
                            <img src="https://i.ibb.co/8PzxyTD/image-77.png"
                                className=" drop-shadow-2xl" alt="" />
                        </div>
                    </div>
                    <div
                        style={stretchingIcon}
                        className="absolute lg:-right-11 right-0 lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center stretchingIcon">
                        <img src="https://i.ibb.co/wJ1xcB8/Group.png" className="drop-shadow-2xl lg:w-auto w-[12px]" alt="" />
                    </div>
                    <div
                        style={pushUpPractice}
                        className="absolute pushup-icon lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                        <img src="https://i.ibb.co/Rz6Xr8P/Group-1.png" className="drop-shadow-2xl lg:w-auto w-[18px]" alt="" />
                    </div>
                    <div className="absolute -right-[20px] lg:-right-[61px] bottom-10 bg-white drop-shadow-2xl lg:py-4 py-[10px] lg:px-6 px-[14px] rounded-xl lg:w-[187px] w-[109px]">
                        <div className="text-center">
                            <div className="flex justify-center items-center lg:w-[66px] lg:h-[66px] w-[36px] h-[36px] rounded-full bg-[#6765F0] mx-auto">

                            </div>
                            <div className="pt-[11px]">
                                <h2 className="font-semibold lg:text-base text-[10px]">Zaqky Simorang</h2>
                                <p className="lg:text-[12px] text-[7px] text-[#262524]">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-5 lg:-top-16 left-0 lg:left-16 bg-white drop-shadow-2xl lg:py-[10px] py-[5px] lg:px-5 px-3 rounded-xl flex items-center gap-[14px] w-[109px] lg:w-[187px] member">
                        <div
                            style={danceIcon}
                            className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] rounded-full flex justify-center items-center"
                        >
                            <img src="https://i.ibb.co/S6zXfJQ/dancer-motion-1.png" className="drop-shadow-2xl lg:w-auto w-[18px]" alt="" />
                        </div>
                        <div>
                            <h2 className="font-semibold lg:text-base text-[10px]">150+</h2>
                            <p className="lg:text-[12px] text-[7px] text-[#262524]">Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;