import React from 'react';
import publicLink from '../../utilites/publicLink';

const BattleTested = () => {
    return (
        <div className='bg-main-black flex justify-center flex-col items-center gap-[45px] md:gap-[75px] text-white py-res-xl'>

            <div className=' text-center px-4 md:px-0 flex flex-col justify-center items-center'>
                <h2 className='text-res-lg md:w-[558px] mb-[15px]'>Battle-tested by thousands of users and institutions</h2>
                <p className='text-res-sm '>We believe everyone should have easy access to Web3 through stablecoins </p>
            </div>

            <div className=' flex '>
                <div className='pr-[10px] md:pr-[29px] border-r-2'>
                    <div className=' battle-info-top'>
                        <img className='' src={publicLink('/Volume.svg')} alt="icons" />
                        <p  >$100+ MN</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Volume Swapped</p>
                    </div>
                </div>
                <div className='px-[10px] md:px-[29px]'>
                    <div className='battle-info-top'>
                        <img src={publicLink('/Users.svg')} alt="user" />
                        <p className=''>10K+</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Users</p>
                    </div>

                </div>
                <div className='pl-[10px] md:pl-[29px] border-l-2'>
                    <div className='battle-info-top'>
                        <img src={publicLink('/location.svg')} alt="icons" />
                        <p  >200+</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Countries/Region</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BattleTested;