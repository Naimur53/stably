import React from 'react';
import publicLink from '../../utilites/publicLink';

const Topbar = () => {
    return (
        <div className=' text-black'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-[31px] items-center py-[15px]'>
                        <div className='flex items-center gap-[20px] md:gap-[31px]'>
                            <img className='xl:h-[31px]' src={publicLink('/nav-logo.png')} alt="logo" />

                            <div className='hidden xl:block w-[1px] h-[28px] border border-light-pink'>
                            </div>
                        </div>
                        <div className='hidden xl:block'>
                            <ul className='flex gap-[31px] text-res-xs font-semibold leading-[17px]  '>
                                <li><a href="#">Buy & Sell</a></li>
                                <li><a href="#">Integrate</a></li>
                                <li><a href="#">OTC</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* second  */}
                    <div className='hidden xl:block'>
                        <div className='flex items-center gap-[20px]'>
                            <div>
                                <button className='flex text-black  gap-[8px] font-semibold text-res-xs items-center relative group py-[15px]'>
                                    <span>Resources </span>


                                    <img src={publicLink('/expand_more.svg')} alt="expand_more" />
                                    <div className="absolute right-0 w-[150px] -bottom-[0px] bg-white shadow-lg translate-y-full hidden group-hover:block">
                                        <ul>
                                            <li><a href="#" className='py-[10px] block'>Another</a></li>
                                            <li><a href="#" className='py-[10px] block'>Another</a></li>
                                            <li><a href="#" className='py-[10px] block'>Another</a></li>
                                        </ul>

                                    </div>
                                </button>
                            </div>
                            <div className='py-[15px] flex gap-[20px]'>
                                <a href='#' className='text-res-xxs font-bold border border-light-pink inline-block pt-[11px] pb-[10px] px-[34px] rounded-[8px] leading-[17px]'>Login</a>

                                <a href='#' className='text-res-xxs font-bold bg-[#6200FF] text-white inline-block pt-[12px] pb-[10px] px-[34px] leading-[17px] rounded-[8px]'>Sign up</a>
                            </div>

                        </div>
                    </div>
                    {/* menu */}
                    <div className='relative phone-menu-wrap  xl:hidden'>
                        <img className='w-[25px]' src={publicLink('/menu-icon.png')} alt="menu" />
                        <div className="absolute phone-menu  hidden justify-center w-[260px] bg-white right-0 -bottom-5 translate-y-full">
                            <div className='flex items-center flex-col'>

                                <div className=' pt-5 text-center'>
                                    <ul className='flex flex-col gap-[10px] text-res-xs font-semibold leading-[17px]  '>
                                        <li><a href="#">Buy & Sell</a></li>
                                        <li><a href="#">Integrate</a></li>
                                        <li><a href="#">OTC</a></li>
                                    </ul>
                                </div>

                                {/* drop */}
                                <div>
                                    <button className='flex text-black  gap-[8px] font-semibold text-res-xs items-center relative group py-[15px]'>
                                        <span>Resources </span>


                                        <img src={publicLink('/expand_more.svg')} alt="expand_more" />
                                        <div className="absolute right-0 w-[150px] -bottom-[0px] bg-white shadow-lg translate-y-full hidden group-hover:block">
                                            <ul>
                                                <li><a href="#" className='py-[10px] block'>Another</a></li>
                                                <li><a href="#" className='py-[10px] block'>Another</a></li>
                                                <li><a href="#" className='py-[10px] block'>Another</a></li>
                                            </ul>

                                        </div>
                                    </button>
                                </div>
                                {/*  */}
                                <div className='py-[15px] flex gap-[20px]'>
                                    <a href='#' className='text-res-xxs font-bold border border-light-pink inline-block pt-[11px] pb-[10px] px-[34px] rounded-[8px] leading-[17px]'>Login</a>

                                    <a href='#' className='text-res-xxs font-bold bg-[#6200FF] text-white inline-block pt-[12px] pb-[10px] px-[34px] leading-[17px] rounded-[8px]'>Sign up</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Topbar;