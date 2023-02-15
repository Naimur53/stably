import React from 'react';
import publicLink from '../../utilites/publicLink';
import BannerForm from '../BannerForm/BannerForm';
const Banner = () => {

    return (
        <div className='banner-wrap py-res-xl md:pt-[176px] '>
            <div className='container '>
                <div className="flex flex-col md:flex-row   justify-between  gap-[30px] xl:gap-[92px]">
                    <div className=' xl:min-w-[588px] xl:w-[588px] md:col-span-7 flex justify-center md:justify-start items-center'>
                        <div>
                            <h1 className='banner-heading font-bold text-res-xl capitalize md:leading-[89px] leading-[50px]'>
                                Non-custodial flat & crypto Exchange
                            </h1>
                            <p className='my-[30px]  md:w-[462px] text-res-normal leading-[26px]'>The top fiat {'<>'} crypto gateway for stablecoins and alternative digital assets</p>
                            <div className='flex gap-[20px]'>
                                <button className='bg-inner-black nav-button text-[#E3FFF2] rounded-[8px] effect font-bold text-res-xxs leading-[18px]'>Buy & Sell</button>
                                <button className='nav-button font-bold border border-inner-black text-inner-black effect inline-block   leading-[17px] '>Integrate</button>

                            </div>

                        </div>
                    </div>
                    <div  >
                        <BannerForm ></BannerForm>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;