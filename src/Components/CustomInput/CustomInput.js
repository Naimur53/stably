import React, { useEffect, useState } from 'react';
import publicLink from '../../utilites/publicLink';
import SingleOption from '../SingleOption/SingleOption';

const CustomInput = ({ handleInputAndSelectChange, defaultInput, options, defaultOptions }) => {
    const [select, setSelect] = useState(defaultOptions || 0)
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(defaultInput || 0);

    useEffect(() => {
        if (handleInputAndSelectChange) {
            handleInputAndSelectChange({
                input,
                select: {
                    num: select,
                    details: options[select]
                }
            })
        }
    }, [])
    const handleChange = (value) => {
        setSelect(value)
        setOpen(false)
        if (handleInputAndSelectChange) {
            handleInputAndSelectChange({
                input,
                select: {
                    num: select,
                    details: options[select]
                }
            })
        }

    }
    const handleInputChange = (e) => {
        const value = e.target.value
        setInput(value)
        if (handleInputAndSelectChange) {
            handleInputAndSelectChange({
                input: value,
                select: {
                    num: select,
                    details: options[select]
                }
            })
        }
    }
    return (
        <div>
            <div className='w-full h-[68px] px-[8px] rounded-[16px] bg-[#F2F5F9] grid grid-cols-2'>
                <input onChange={handleInputChange} className='bg-transparent px-[8px] text-res-normal font-semibold text-dark-gray focus:outline-0' defaultValue={defaultInput} type="number" />
                <div onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} className='py-[8px] h-full cursor-pointer'>
                    <div className="w-full h-full flex justify-between items-center bg-white rounded-[16px] selection-input px-[16px] py-[8px] relative">
                        <SingleOption {...options[select]}></SingleOption>
                        <div>
                            <img src={publicLink('/down-black.svg')} alt="down arrow" />
                        </div>
                        {
                            open && <div className="absolute left-0 right-0 bg-white  -bottom-1 translate-y-full flex flex-col gap-1 rounded-[16px]">
                                {
                                    options.map((single, i) => <SingleOption i={i} handleClick={handleChange} dropdown {...single}></SingleOption>)
                                }

                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomInput;