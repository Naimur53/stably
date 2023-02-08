import React from 'react';
import publicLink from '../../utilites/publicLink';

const DataProtected = () => {
    const data = [
        {
            icon: 'Lock',
            title: 'Data privacy',
            des: 'When you make a payment with Stably, we encrypt your data with leading encryption standards to keep it secure.'
        },
        {
            icon: 'Phone',
            title: 'Identity verification',
            des: 'To verify it’s you, we’ll text or email you a one-time code. For additional security on certain transactions, we may require a secondary verification, including biometric or pin.'
        },
        {
            icon: 'Security',
            title: 'Security standards',
            des: 'We’re a certified PCI Service Provider Level 1, which means we meet the highest level of certification available in the payments industry.'
        },
    ]
    return (
        <div className='py-res-xl'>
            <div className="container">
                <h2 className='main-heading mb-[40px] md:mb-[75px]'>Your data, protected</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]'>
                    {
                        data.map(single => <div className='pb-[24px]'>
                            <div className='pb-[24px] border-b border-light-gray'>

                                <img src={publicLink(`/${single.icon}.svg`)} alt={single.icon} />
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