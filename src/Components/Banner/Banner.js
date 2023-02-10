import React from 'react';
import publicLink from '../../utilites/publicLink';
import BannerForm from '../BannerForm/BannerForm';
const Banner = () => {

    return (
        <div style={{
            backgroundImage: `url(${publicLink('/banner-bg.png')})`
        }} className='banner-wrap py-res-xl bg-cover bg-top'>
            <div className='container '>
                <div className="grid grid-cols-12 gap-[69px]">
                    <div className='col-span-7 flex justify-center md:justify-start items-center'>
                        <div>
                            <h1 className='banner-heading text-res-xl uppercase'>
                                SELF-CUSTODY FIAT & CRYPTO EXCHANGE
                            </h1>
                            <p className='my-[21px] font-bold text-res-normal leading-[26px]'>The #1 plug-and-play fiat {`<>`} crypto gateway for stablecoins and alternative digital assets</p>
                            <button className='bg-[#00003F] pt-[12px] pr-[35px] pb-[11px] pl-[34px] text-[#E3FFF2] rounded-[8px] font-bold text-res-xxs leading-[18px]'>Buy & Sell</button>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <BannerForm ></BannerForm>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;