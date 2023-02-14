import React from 'react';

const Faqs = () => {
    const data = [
        {
            heading: 'Which payment methods can I use with Stably Ramp?',
            des: 'Stably Ramp offers the following payment methods: Fedwire, SWIFT, ACH, instant ACH, and credit/debit cards (Visa, Mastercard). We are constantly adding support for more payment methods worldwide. Please contact us at hello@stably.io if you would like to request support for other methods.',
        },
        {
            heading: 'What is Stably Ramp’s fee structure?',
            des: 'Depending on the payment method that you select, we charge as low as $2 in total fees for each buy or sell transaction of any supported asset. For a full list of Stably Ramp fees, please visist: stably.io/fees'
        },
        {
            heading: 'What assets and blockchains does Stably Ramp support?',
            des: 'We support all major digital assets, including BTC, ETH, LTC, USDC, USDT, plus our own USDS stablecoin. We will also list 100+ additional assets across 30+ networks in 2023. For a full list of our supported assets and networks, please visit: stably.io/assets'
        },
        {
            heading: 'How does Stably Ramp reduce custody risk?',
            des: 'Unlike centralized exchanges that have complete control over your funds, all assets purchased through Stably Ramp are sent directly to your wallet. Once your payment has settled with our regulated partner, Prime Trust. Additionally, all fiat funds are processed and securely custodied by Prime Trust at FDIC-insured banks for the benefit of our customers as well as segregated from Prime Trust’s own balance sheet.'
        },
        {
            heading: 'How does Stably comply with regulations?',
            des: 'Stably partners with Prime Trust, a Nevada-chartered trust company and qualified custodian, to process and custody customer fiat funds.  Prime Trust is also the trustee and convertible virtual currency administrator of USDS in accordance with FinCEN’s guidance (FIN-2013-G001).  Stably, through our wholly-owned subsidiary, is also a FinCEN-registered MSB. Both Stably and Prime Trust maintain our own BSA/AML compliance programs  and procedures, including on-chain transaction monitoring. Stably does not manage customer fiat funds and we are not a bank.'
        },
    ]
    return (
        <section>
            <div className="container py-res-xl">
                <h2 className='main-heading'>FAQs</h2>
                <div className='mt-[75px] border-b border-[#1D39444D]'>
                    {
                        data.map(single => <div className='pt-[43px] pb-[44px] border-t border-[#1D39444D]'>
                            <h2 className='mb-[24px] text-[18px] md:text-[23px] leading-[27px] font-bold'>{single.heading}</h2>
                            <p className='text-res-sm text-black '>{single.des}</p>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Faqs;