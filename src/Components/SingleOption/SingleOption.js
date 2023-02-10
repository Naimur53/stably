import React from 'react';
import publicLink from '../../utilites/publicLink';

const SingleOption = ({ handleClick, i, img, title, des, dropdown }) => {
    const click = () => {
        if (handleClick) {
            handleClick(i)
        }
    }
    return (
        <div onClick={click} className={`w-[132px]  transition-all flex items-center gap-[12px]  ${dropdown && 'hover:bg-[#F2F5F9]  px-[16px] py-[8px] w-auto '}`}>
            <img className='w-[32px]' src={publicLink(img)} alt="icon" />
            <div>
                <h5 className='font-bold text-dark-gray text-xs leading-[16px] '>{title}</h5>
                {
                    des && <p className='mt-[3px] text-[12px] leading-[12px]'>{des}</p>
                }

            </div>
        </div>
    );
};

export default SingleOption;