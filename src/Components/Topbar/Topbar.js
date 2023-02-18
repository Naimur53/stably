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
    const ExtraLink = (

        <div className='md:border-l border-[#00003F] pl-[31px]'>
            <ul className='flex flex-col items-center md:flex-row gap-[10px] md:gap-[31px] text-xs font-medium text-[#00003F]'>
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Docs</a></li>
            </ul>
        </div>
    )
    const Buttons = (
        <div className='flex gap-[10px] md:gap-[20px]'>
            <a href='#' className='nav-button font-bold border border-inner-black text-inner-black inline-block effect  leading-[17px]'>Buy Crypto</a>

            <a href='#' className=' font-bold bg-inner-black nav-button text-[#E3FFF2] inline-block leading-[17px]  effect'>Sign up</a>
        </div>
    )
    return (
        <div style={{ backgroundColor, }} className=' text-black fixed top-0 left-0 right-0 z-10 transition-all'>
            <div className="container">
                <div className='flex justify-between items-center py-[17px] '>
                    <div className='flex gap-[31px] items-center'>
                        <Logo className='w-[120px] md:w-auto'></Logo>
                        <div className='py-[7px] md:block hidden'>
                            {ExtraLink}
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        {Buttons}
                    </div>
                    <div className="block md:hidden relative menu-icon-wrap">
                        <img className='w-[35px]' src={publicLink('/menu.svg')} alt="menu icon" />
                        <div className="absolute  right-0 bottom-0 translate-y-full bg-white w-[240px] rounded-md py-5 menu-content-wrap  shadow-lg  ">
                            {ExtraLink}

                            <div className='flex justify-center mt-5'>
                                {Buttons}
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Topbar;