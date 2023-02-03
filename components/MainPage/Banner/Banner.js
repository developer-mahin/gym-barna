import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";



const Banner = () => {

    const background = {
        backgroundImage: `url(${"https://i.ibb.co/tK4Bjfy/Ellipse-136-1.png"})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "71px 0px"
    };

    return (
        <div className="bg-gradient-to-r from-[#FCF2EF] to-[#FEFDFF] lg:pt-[194px] pt-[60px] pb-[60px]">
            <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-32 items-end px-6">
                <div>
                    <h2 className="lg:text-[56px] text-[28px] text-[#262524] font-semibold lg:font-medium lg:leading-[65px] tracking-wide">Healthy in side <br /> <span className="text-[#8382EB]">fresh</span> out side</h2>
                    <div className="py-6">
                        <p className="text-[#262524] lg:w-[492px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-9">
                        <button className="flex items-center gap-1 lg:gap-20 bg-[#264373] text-white py-4 px-4 lg:px-6 rounded-xl drop-shadow-2xl">
                            <span className="text-sm lg:text-base">Get started</span>
                            <IoIosArrowDroprightCircle className="text-xl lg:text-3xl" />
                        </button>
                        <button className="flex items-center bg-[#fff] gap-1 lg:gap-4 py-4 px-4 lg:px-6 rounded-xl drop-shadow-2xl">
                            <AiFillPlayCircle className="text-xl lg:text-3xl text-[#264373]"></AiFillPlayCircle>
                            <span className="text-[#264373] text-sm lg:text-base">Learn more</span>
                        </button>
                    </div>
                    <div className="mt-[51px]">
                        <p className="mb-[29px]">Brands: </p>
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
                                className=" drop-shadow-2xl abc" alt="" />
                        </div>
                    </div>
                    <div className="absolute -right-11">
                        <img src="https://i.ibb.co/5kC708f/Group-3867-removebg-preview.png" className="drop-shadow-2xl" alt="" />
                    </div>
                    {/* bottom-[80px] left-[56px] */}
                    <div className="absolute pushup-icon">
                        <img src="https://i.ibb.co/WHFZqKX/Group-3868-1-removebg-preview.png" className="drop-shadow-2xl w-[70px]" alt="" />
                    </div>
                    <div className="absolute -right-[20px] lg:-right-[61px] bottom-10 bg-white drop-shadow-2xl py-4 px-6 rounded-xl w-[187px]">
                        <div className="text-center">
                            <div className="flex justify-center items-center">
                                <img src="https://i.ibb.co/tMMz33f/Ellipse-142.png" className="w-[66px] h-[66px]" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Zaqky Simorang</h2>
                                <p className="text-[12px] text-[#262524]">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-5 lg:-top-16 left-0 lg:left-16 bg-white drop-shadow-2xl py-[10px] px-5 rounded-xl flex items-center w-[150px] lg:w-[187px] member">
                        <div>
                            <img src="https://i.ibb.co/WDjJkPy/Group-3865-removebg-preview.png" alt="" />
                        </div>
                        <div>
                            <h2 className="font-semibold">150+</h2>
                            <p className="text-[12px] text-[#262524]">Members</p>
                        </div>
                    </div>
                </div>


                {/* <div>
                    <img src="https://i.ibb.co/NFS5tM7/Group-4227.png" className="w-full h-[580px]" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;