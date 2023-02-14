import React from 'react';
import publicLink from '../../utilites/publicLink';
import Logo from '../Logo/Logo';

const Topbar = () => {
    return (
        <div className=' text-black'>
            <div className="container">
                <div className='flex justify-between items-center py-[17px] '>
                    <Logo className='w-[120px] md:w-auto'></Logo>

                    <div className='flex gap-[10px] md:gap-[20px]'>
                        <a href='#' className='nav-button font-bold border border-inner-black text-inner-black inline-block   leading-[17px]'>Buy Crypto</a>

                        <a href='#' className=' font-bold bg-inner-black nav-button text-[#E3FFF2] inline-block leading-[17px]  '>Sign up</a>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Topbar;