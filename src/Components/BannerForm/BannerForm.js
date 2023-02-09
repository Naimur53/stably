import React from 'react';
import publicLink from '../../utilites/publicLink';

const BannerForm = () => {
    return (
        <div className='bg-white pl-[16px] pr-[8px] pt-[16px] rounded-[16px]'>
            {/* heading */}
            <div className='flex items-center justify-between'>
                <div>
                    <img src={publicLink('/card-pink.png')} alt="s" />
                </div>
                <div>
                    <h5 className='text-main-pink text-res-normal font-semibold font-josefin'>Buy USDC</h5>
                </div>
                <div>
                    <button className='p-[8px]'>
                        <img src={publicLink('/menu.svg')} alt="menu" />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerForm;