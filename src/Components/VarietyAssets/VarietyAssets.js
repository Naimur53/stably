import React from 'react';
import publicLink from '../../utilites/publicLink';

const VarietyAssets = () => {

    const assets = [
        "Binance", "Harmony", "Gnosis", "Moonriver", "Moonbeam", "Celo"
    ]
    return (
        <section className='bg-[#EFEFEF] py-res-xl'>
            <div className="px-[20px] md:px-[40px] xl:px-[80px] ">
                <h1 className='text-center main-heading'>Easily buy or sell over 100 digital assets across 30+ blockchains using bank transfers and credit/debit cards in 200+ countries/regions</h1>

                <div className='mt-md flex md:flex-row flex-col xl:justify-between justify-center gap-[40px] md:gap-[87px] flex-wrap xl:flex-nowrap'>
                    {
                        assets.map(single => <div className='flex flex-col items-center justify-center'>
                            <img src={publicLink(`/${single}.svg`)} alt={single} />
                            <h6 className='text-res-normal '>{single}</h6>
                        </div>)
                    }
                </div>

            </div>
        </section>
    );
};

export default VarietyAssets;