import React from 'react';
import publicLink from '../../utilites/publicLink';

const DataProtected = () => {
    const data = [
        {
            icon: 'lock-and-key.png',
            title: 'Data privacy',
            des: 'Purchased assets are sent directly to your own wallet once your payment has settled. With Stably Ramp, you don’t need to worry about custody risk like on centralized exchanges which have complete control over customer funds..'
        },
        {
            icon: 'money-with.png',
            title: 'Superior fees, as low as 1%',
            des: 'Not only do we offer stablecoin-friendly payment methods that are more scalable vs. cards, our system also sources liquidity directly from DeFi, allowing us to bypass centralized exchange exposure and  inventory management which translates to lower fees for our end users '
        },
        {
            icon: 'Security.svg',
            title: 'Security standards',
            des: 'We will list over 100 digital assets across 30+ blockchain networks throughout 2023. Using traditional payment methods, Stably Ramp users will be able to buy/sell both native and bridged assets, including popular stablecoins like USDC and DAI'
        },
        {
            icon: 'Lock.svg',
            title: 'Self-custody settlement',
            des: 'Purchased assets are sent directly to your own wallet once your payment has settled. With Stably Ramp, you don’t need to worry about custody risk like on centralized exchanges which have complete control over customer funds.'
        },
        {
            icon: 'Phone.svg',
            title: 'Global onboarding support',
            des: 'New individual users can register with Stably Ramp and get KYC verified in less than 5 minutes (US residents only). In additions to individuals, we also support KYB onboarding for entities in 200+ countries/regions'
        },
        {
            icon: 'Security.svg',
            title: 'Omnichain fiat gateway',
            des: 'We’re a certified PCI Service Provider Level 1, which means we meet the highest level of certification available in the payments industry.'
        },
    ]
    return (
        <div className='py-res-xl'>
            <div className="container">
                <h2 className='main-heading mb-[40px] md:mb-[75px] font-bold'>Why Stably Ramp?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-y-[75px]'>
                    {
                        data.map(single => <div className='pb-[24px]'>
                            <div className='pb-[24px] border-b border-light-gray'>

                                <img className='w-[42px]' src={publicLink(`/${single.icon}`)} alt={single.icon} />
                            </div>
                            <div className='mt-[18px]'>
                                <h2 className='text-ls font-bold mb-[16px]'>{single.title}</h2>
                                <p className='text-res-xxs w-[300px] md:w-[315px]'>{single.des}</p>
                            </div>


                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default DataProtected;