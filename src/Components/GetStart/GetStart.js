import React from 'react';
import publicLink from '../../utilites/publicLink';

const GetStart = () => {
    return (
        <div className='p-[20px] md:p-[30px] text-white'>

            <div className="bg-main-black px-[40px] md:px-[136px] py-[35px] md:py-[50px] rounded-[25px]">
                <h2 className='main-heading md:leading-[64px]'>Get started with Stably</h2>

                <button className='mt-[23px] bg-[#33DDB3] rounded-[8px] pt-[12px] pl-[31px] pb-[11px] pr-[32px] text-main-black font-bold text-[15px] leading-[17px]'>Sign up</button>

                <div className='mt-[45px] md:mt-[72px]'>
                    <h2 className='text-res-ls font-bold mb-[22px]'>Interested in adding Stably to your site?</h2>
                    <p className='text-[#33DDB3] text-[11px] md:text-[13px] font-bold leading-[16px]'>Stably for businesses</p>
                </div>
                <div className='mt-[50px] md:mt-[72px] xl:flex items-center justify-between py-[10px] border-t border-white/[.3]'>
                    <div>
                        <img src={publicLink('/white-logo.svg')} alt="logo" />
                    </div>
                    <div>
                        <div className='xl:flex gap-[17px]'>
                            <ul className='flex gap-[10px] md:gap-[19px] text-[11px] md:text-[13px] leading-[16px] text-[#FEFEFE] mt-4 xl:mt-0 xl:border-r pr-[19px] border-white/[0.298]'>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Cookie settings</a></li>
                            </ul>
                            <div className='text-[#FEFEFE] font-bold text-res-xxs  xl:flex items-center xl:justify-center mt-4 xl:mt-0 gap-[13px] leading-[16px]'>
                                <div className='flex items-center gap-[5px]  '>
                                    <img className='relative top-1' src={publicLink('/share-top.svg')} alt="icons " />
                                    <h5>United States</h5>
                                </div>
                                <div className='flex items-center gap-[5px] mt-4 md:mt-0'>
                                    <img className='w-[16px] relative top-[4px]' src={publicLink('/chat.svg')} alt="icons " />
                                    <h5>English (United States)</h5>
                                </div>
                            </div>
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