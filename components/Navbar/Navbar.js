import Link from "next/link";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="bg-gradient-to-r from-[#FCF2EF] to-[#FEFDFF]">
            <div className='container mx-auto px-6'>
                <nav className='md:container mx-auto flex justify-between items-center relative border-gray-200 px-2 sm:px-4 py-2.5'>
                    <Link href='/' className='flex items-center gap-1'>
                        <h3 className="text-xl w-[56px] h-[35px] text-white bg-[#6765F0] rounded-[10px] text-center px-[6px] py-[3px]">Gym</h3> <h4 className="text-xl">baran</h4>
                    </Link>
                    <ul className={`md:bg-transparent md:flex md:justify-end md:static absolute w-full text-center z-10 flex flex-col p-4 mt-4 border border-gray-100-lg bg-[#FCF2EF] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white" ${open ? 'top-16 -left-4 w-1/2' : 'top-[-360px]'}`}>
                        <li>
                            <Link
                                onClick={() => setOpen(!open)}
                                href="/" className={`block md:inline py-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" ${open ? "text-left font-medium" : "text-center"}`}
                            >Home</Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => setOpen(!open)}
                                href="/program" className={`block md:inline py-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" ${open ? "text-left font-medium" : "text-center"}`}
                            >Program</Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => setOpen(!open)}
                                href="/blog"
                                className={`block md:inline py-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" ${open ? "text-left font-medium" : "text-center"}`}
                            >Blog</Link>
                        </li>


                        <li>
                            <Link
                                onClick={() => setOpen(!open)}
                                href="/about" className={`block md:inline py-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" ${open ? "text-left font-medium" : "text-center"}`}
                            >About us</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpen(!open)}
                                href="/login" className={`block md:inline  text-center my-2 md:w-auto py-3 px-8 bg-[#264373] rounded-md text-white drop-shadow-2xl  ${open ? "text-left font-medium " : "text-center"}`}
                            >Login</Link>
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        {
                            open ?
                                <HiX onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" /> :
                                <HiBars3  onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer"/>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;