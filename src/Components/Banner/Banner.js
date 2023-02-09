import React from 'react';
import publicLink from '../../utilites/publicLink';
import BannerForm from '../BannerForm/BannerForm';
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${publicLink('/banner-bg.png')})`
        }} className='banner-wrap py-res-xl bg-cover bg-top'>
            <div className='container '>
                <div className="grid grid-cols-12 gap-[92px]">
                    <div className='col-span-7'>
                        <h1 className='banner-heading text-res-xl uppercase'>
                            Simple stablecoin payments
                        </h1>
                        <p className='my-[30px]'>With Stably you can buy, sell, and hold stablecoins like USDC, USDT, and DAI. You’ll get a chance to review your order before clicking to confirm your purchase.</p>
                        <button className='bg-[#00003F] pt-[12px] pr-[35px] pb-[11px] pl-[34px] text-[#E3FFF2] rounded-[8px] font-bold text-res-xxs leading-[18px]'>Buy & Sell</button>
                    </div>
                    <div className='col-span-5'>
                        <BannerForm></BannerForm>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;