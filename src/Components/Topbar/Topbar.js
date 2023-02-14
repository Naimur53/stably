import publicLink from '../../utilites/publicLink';
import Logo from '../Logo/Logo';
import React, { useState, useEffect } from 'react';

const Topbar = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setBackgroundColor('white');
            } else {
                setBackgroundColor('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div style={{ backgroundColor, }} className=' text-black fixed top-0 left-0 right-0 z-10 transition-all'>
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