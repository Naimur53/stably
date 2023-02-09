import React from 'react';

const Faqs = () => {
    const data = [
        {
            heading: 'Which payment methods can I use with Stably?',
            des: 'You can use a variety of payment methods with Stably. We support ACH Bank Transfers (Instant and 5 business days), Wires and Card payments',
        },
        {
            heading: 'How does Stably exchange fiat to crypto?',
            des: 'We use a variety of regulated financial instiutions and exchanges such as PrimeTrust. You can securely add funds to your crypto wallet in one-click. Store your verified identity and payment information with Stably the first time you use it, and we’ll autofill your saved details for all future crypto purchases and sales.'
        },
        {
            heading: 'Where can I get help with a purchase I made with Stably?',
            des: 'Please reach out to our support page at support.stably.io'
        },
        {
            heading: 'How do I delete information from Link?',
            des: 'You can reach out to our support team at support.stably.io and close your Stably Ramp account entirely.'
        },
    ]
    return (
        <section>
            <div className="container py-res-xl">
                <h2 className='main-heading'>FAQs</h2>
                <div className='mt-[75px] border-b border-[#1D39444D]'>
                    {
                        data.map(single => <div className='pt-[43px] pb-[40px] border-t border-[#1D39444D]'>
                            <h2 className='mb-[20px] text-[18px] md:text-[23px] leading-[27px] font-bold'>{single.heading}</h2>
                            <p className='text-res-xs'>{single.des}</p>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Faqs;