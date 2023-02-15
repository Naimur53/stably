import React from 'react';
import publicLink from '../../utilites/publicLink';

const DataProtected = () => {
    const data = [
        {
            title: 'Self-custody settlement ',
            des: 'Purchased assets are sent directly to your wallet upon payment settlement. With Stably Ramp, you can stop worrying about custody risk from centralized exchanges.'
        },
        {
            title: 'Superior fees, as low as $2',
            des: 'We offer stablecoin-friendly payment methods with better scalability than cards and source liquidity directly from DeFi, resulting in lower fees to our end users. '
        },
        {
            icon: 'Security.svg',
            title: 'Omnichain fiat gateway ',
            des: 'We will list 100+ assets throughout 2023 so you can buy/sell both native and bridged assets across 30+ chains, including USDC and DAI, via traditional payment methods.'
        },
        {
            icon: 'Lock.svg',
            title: 'Access to emerging blockchains ',
            des: 'We have expanded our USDS stablecoin to 10+ emerging chains such as XRPL, Chia, and Harmony. As a result, Stably Ramp is the only fiat gateway with stablecoin access to these exclusive ecosystems.'
        },
        {
            icon: 'Phone.svg',
            title: 'Global onboarding support',
            des: 'New individual users can register and get KYC verified in 5 minutes or less (US residents only). In additions to individuals, we also support KYB onboarding for entities in 200+ countries/regions.'
        },
        {
            icon: 'Security.svg',
            title: 'Regulatory compliant',
            des: 'We partner with Prime Trust, a US-regulated trust company and qualified custodian, for funds processing and fiat custody. We are also a registered money service business (MSB).'
        },
    ]
    return (
        <div className='py-res-xl'>
            <div className="container">
                <h2 className='main-heading mb-[40px] md:mb-[75px]  '>Why Stably Ramp?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-y-[75px]'>
                    {
                        data.map((single, i) => <div className='pb-[24px]'>
                            <div className='pb-[24px] border-b border-light-gray'>

                                <img className='w-[42px] h-[42px]' src={publicLink(`/sec-icons/Icon-${i + 1}.svg`)} alt={single.icon} />
                            </div>
                            <div className='mt-[18px]'>
                                <h2 className='text-ls font-bold mb-[16px]'>{single.title}</h2>
                                <p className='text-res-xs w-[300px] md:w-[315px] tracking-[-0.16px]'>{single.des}</p>
                            </div>


                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default DataProtected;