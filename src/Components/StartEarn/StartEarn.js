import React from 'react';
import publicLink from '../../utilites/publicLink';

const StartEarn = () => {
    const data = [
        {
            icon: 'Step-1',
            heading: 'Visit Stably Ramp',
            des: 'On your phone or desktop On your phone or desktop On your phone or desktop',
            option: "Signup",
        },
        {
            icon: 'user-verify',
            heading: 'Verify yourself',
            des: 'To start using stably To start using stably To start using stably To start using stably',
            option: "Learn More",
        },

        {
            icon: 'left-right',
            heading: 'Buy & Sell',
            des: 'With instant Bank Transfer With instant Bank Transfer With instant Bank Transfer',
            option: "Signup",
        },
        {
            icon: 'calen',
            heading: 'Track your transactions',
            des: 'Just like that Just like that Just like that Just like that Just like that Just like that',
            option: "Get Started",
        },
    ]
    return (
        <div className='px-[20px] md:px-[30px] text-white'>
            <div className="bg-main-black py-res-xl px-[40px] md:px-[80px] rounded-[25px]">
                <div className='text-center  mb-[50px] md:mb-[80px]'>
                    <h1 className='main-heading'>Start earning in 4 easy steps.</h1>
                    <p className='mt-[15px] text-res-sm'>We believe everyone should have easy access to Web3 through stablecoins </p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[45px]'>
                    {
                        data.map(single => <div>
                            <div className='pb-[25px] border-b '>
                                <img className='max-w-[56px]' src={publicLink(`/${single.icon}.svg`)} alt="" />
                            </div>
                            <div className='mt-[20px]'>
                                <h2 className='text-res-ls leading-[23px] font-bold mb-[18px]'>{single.heading}</h2>
                                <p className='text-res-xxs mb-[18px]'>
                                    {single.des}
                                </p>

                            </div>
                            <div>
                                <button className='font-bold text-[18px] leading-[24px] md:text-[18px] flex items-center gap-[10px] effect'>
                                    <span>{single.option}</span>
                                    <img src={publicLink('/arrow_forward.svg')} alt="arrow_forward" />
                                </button>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default StartEarn;