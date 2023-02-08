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
                <div className='pr-[29px] border-r-2'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[29px]' src={publicLink('/Volume.svg')} alt="icons" />
                        <p className='font-bold text-normal md:text-[30px]'>$100+ MN</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-res-sm mt-[15px]'>Volume Swapped</p>
                    </div>
                </div>
                <div className='pl-[29px]'>
                    <div className='flex gap-[10px] items-center'>
                        <img className='w-[23px]' src={publicLink('/Users.svg')} alt="user" />
                        <p className='font-bold text-normal md:text-[30px]'>10K+</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-res-sm mt-[15px]'>Users</p>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default BattleTested;