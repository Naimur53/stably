import React, { useState } from 'react';
import publicLink from '../../utilites/publicLink';
import CustomInput from '../CustomInput/CustomInput';

const BannerForm = () => {
    const [fromInfo, setFromInfo] = useState({})
    const [ToInfo, setToInfo] = useState({})
    const handleInputAndSelectChangeFrom = (data) => {
        setFromInfo(data)
    }
    const handleInputAndSelectChangeTo = (data) => {
        setToInfo(data)
    }
    return (
        <div className='bg-white pl-[16px] pr-[8px] pt-[16px] rounded-[16px] font-josefin'>
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
            <div className='pt-[16px]'>

                <div>
                    <h4 className='py-[11px] text-dark-gray font-medium text-res-xxs'>From</h4>
                    <CustomInput
                        defaultInput={100}
                        options={
                            [
                                {
                                    img: '/primex_ach-logo.png',
                                    title: 'ACH',
                                    des: ''
                                },
                                {
                                    img: '/span.png',
                                    title: 'USDC',
                                    des: 'Stellar'
                                },
                            ]
                        }
                        defaultOptions={0}
                        handleInputAndSelectChange={handleInputAndSelectChangeFrom}></CustomInput>
                </div>
                <div className='mt-[20px] pt-[16px]'>
                    <h4 className='py-[11px] text-dark-gray font-medium text-res-xxs'>To</h4>
                    <CustomInput
                        defaultInput={99.50}
                        options={
                            [
                                {
                                    img: '/primex_ach-logo.png',
                                    title: 'ACH',
                                    des: ''
                                },
                                {
                                    img: '/span.png',
                                    title: 'USDC',
                                    des: 'Stellar'
                                },
                            ]
                        }
                        defaultOptions={1}
                        handleInputAndSelectChange={handleInputAndSelectChangeFrom}></CustomInput>
                </div>
                <div className='text-center py-[11px]'>
                    <p className='text-res-xxs text-[#9AA5B8] leading-[15px]'>1 USDC = 1.00 USD</p>
                </div>

                {/* summery */}
                <div>
                    <h2 className='text-[13px] leading-[13px] text-dark-gray py-[11px]'>Summary</h2>
                    <div className='border text-center p-[17px] border-[#CCCCCC] rounded-[16px] text-dark-gray text-res-xs font-bold leading-[16px]'>
                        <p>You get <span className='text-main-pink'>99.50 USDC (Stellar)</span> for <span className='text-main-pink'>100 USD</span></p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BannerForm;