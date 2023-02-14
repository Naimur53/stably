import React from 'react';
import publicLink from '../../utilites/publicLink';

const Partners = () => {
    const data = [
        {
            img: 'Talkspace',
            des: 'Send stablecoins to your friends anytime, anywhere.'
        },
        {
            img: 'Italic',
            des: 'Shop luxury-grade essentials without the labels.'
        },
        {
            img: 'Keeps',
            des: 'Get expert-backed hair loss products delivered to you.'
        },
        {
            img: 'MagicEden',
            des: 'Create, discover, and collect unique NFTs.'
        },
    ]
    return (
        <div className='py-res-xl'>
            <div className="container">

                {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
                    {
                        data.map(single => <div className='flex md:items-cednter flex-col'>
                            <div className='w-full relative'>
                                <img className='w-full' src={publicLink(`/${single.img}.png`)} alt={single.img} />
                                <div className='absolute top-[18px] left-[18px]'>
                                    <img className='w-[120px]' src={publicLink(`/${single.img}.svg`)} alt={single.img} />

                                </div>
                            </div>
                            <div className='flex  gap-[16px]'>
                                <div className='mt-[24px]'>
                                    <img className='min-w-[34px]' src={publicLink('/Top-right.svg')} alt="Top-right" />
                                </div>
                                <p className='text-res-xxs mt-[19px] w-[194px]'>{single.des}</p>
                            </div>

                        </div>)
                    }

                </div> */}
                <div className='mt-[45px] md:mt-[70px] py-[60px] px-[20px] md:px-[40px] xl:px-[166px] rounded-[12px bg-[#FEFEFE] built-shadow'>
                    <div className='text-center flex flex-col items-center'>
                        <img className='w-[128px]' src={publicLink('/Stably-Icon.png')} alt="Stably-Icon" />
                        <h2 className='text-res-lg my-[16px] leading-[51px]'>Built by stably</h2>
                        <p className='text-res-sm  md:w-[748px]'>Battle-tested by thousands of users and institutions Stably created Stably Ramp to provide a faster and easier way to get into web3 via stablecoins.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;