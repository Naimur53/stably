import React from 'react';
import publicLink from '../../utilites/publicLink';

const GetStart = () => {
    return (
        <div className='  text-[#FEFEFE]'>

            <div className="bg-[#00131B] px-[40px] md:px-[136px] py-[35px] md:py-[50px] ">

                <div className='flex justify-start xl:justify-between items-start xl:items-center xl:flex-row flex-col gap-[30px] md:gap-[70px] '>
                    <div>
                        <h2 className='main-heading md:leading-[64px]'>Get started with Stably</h2>
                        <p className='text-res-ls font-bold my-[17px]'>Interested in adding Stably to your site?</p>
                        <p className='text-[#33DDB3] text-[13px] leading-[16px] font-bold'>Stably for businesses</p>
                    </div>
                    <div>
                        <p className='text-res-ls mb-[15px]'>Subscribe to our newsletter</p>
                        <div className='flex items-start xl:flex-row flex-col gap-[13px]'>
                            <input className='xl:w-[285px] bg-transparent focus:outline-none placeholder:text-[#C7C7C7] text-[15px] leading-[20px]  py-[12px] px-[19px] rounded-[12px] border-[#C7C7C7] border' placeholder='Enter your email address' type="email" />
                            <button type='submit' className='bg-white text-main-black text-res-xs md:leading-[21px] py-[12px] px-[19px] rounded-[12px] font-bold effect'>Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* middle */}
                <div className='grid  grid-cols-6 xl:grid-cols-12 pt-[70px] gap-[50px]  border-t border-white/[.5] mt-[70px]'>
                    <div className=' col-span-6 xl:col-span-3'>
                        <div>
                            <img src={publicLink('/footer-logo.png')} alt="logo" />
                        </div>
                        <p className='mt-[15px] w-[244px] md:mt-[30px] text-white/[.5]'>
                            The top fiat {"<>"} crypto gateway for stablecoins and alternative digital assets
                        </p>

                    </div>
                    <div className="col-span-3 ">
                        <div className="footer-content-wrap">
                            <div>
                                <h2>Resource</h2>
                                <ul>
                                    <li><a href="#">Personal</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Docs</a></li>
                                    <li><a href="#"> FAQ</a></li>
                                    <li><a href="#">Status</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="footer-content-wrap">
                            <div>
                                <h2>Company</h2>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#"> Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="footer-content-wrap">
                            <div>
                                <h2>Follow us </h2>
                                <ul>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                    <li><a href="#">Medium</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='mt-[50px] md:mt-[70px] xl:flex items-center justify-between py-[30px] border-t border-white/[.5] mb-[40px]'>
                    <div>
                        <p className='md:text-[14px] leading-[16px] text-[#FEFEFE]'>© 2023 Stably. All rights reserved.</p>
                    </div>
                    <div>
                        <div className=' '>
                            <ul className='flex gap-[10px] md:gap-[40px] text-[11px] md:text-[13px] leading-[16px] text-[#FEFEFE] mt-4 xl:mt-0 '>
                                <li><a href="#">Status</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Cookie settings</a></li>
                            </ul>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStart;