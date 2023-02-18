import React from 'react';
import publicLink from '../../utilites/publicLink';

const BattleTested = () => {
    return (
        <div className='bg-main-black flex justify-center flex-col items-center gap-[45px] md:gap-[80px] text-white py-res-xl'>

            <div className=' text-center px-4 md:px-0 flex flex-col justify-center items-center gap-[15px]'>
                <h2 className='main-heading mb-[15px] md:leading-[51px]'>Powering the DeFi Revolution with a superior fiat gateway</h2>
                <p className='text-res-normal '>Big chains, little chains, sidechains, parachains. Stably Ramp covers them all!</p>
            </div>

            <div className='flex powering-content-wrap '>
                <div className='pr-[10px] md:pr-[29px] border-r-2'>
                    <div className=' battle-info-top'>
                        <img className='' src={publicLink('/Volume.svg')} alt="icons" />
                        <p  >$100+ M</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Volume Swapped</p>
                    </div>
                </div>
                <div className='px-[10px] md:px-[29px]'>
                    <div className='battle-info-top'>
                        <img className='md:min-w-[46px]' src={publicLink('/block.svg')} alt="user" />
                        <p className=''>30+</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Blockchains</p>
                    </div>

                </div>
                <div className='px-[10px] md:px-[29px]'>
                    <div className='battle-info-top'>
                        <img className='md:w-[23px]' src={publicLink('/Users.svg')} alt="user" />
                        <p className=''>50+</p>
                    </div>
                    <div className='text-center'>
                        <p className='battle-text'>Partners</p>
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