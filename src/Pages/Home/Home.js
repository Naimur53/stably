import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BattleTested from '../../Components/BattleTested/BattleTested';
import DataProtected from '../../Components/DataProtected/DataProtected';
import Faqs from '../../Components/Faqs/Faqs';
import GetStart from '../../Components/GetStart/GetStart';
import Partners from '../../Components/Partners/Partners';
import StartEarn from '../../Components/StartEarn/StartEarn';
import Topbar from '../../Components/Topbar/Topbar';
import VarietyAssets from '../../Components/VarietyAssets/VarietyAssets';
import publicLink from '../../utilites/publicLink';
const Home = () => {
    return (
        <div >
            <Topbar></Topbar>
            <div
                style={{
                    backgroundImage: `url(${publicLink('/banner-bg.png')})`
                }}
                className='bg-cover bg-bottom'
            >

                <Banner></Banner>
                <VarietyAssets></VarietyAssets>
            </div>
            <DataProtected></DataProtected>
            <BattleTested></BattleTested>
            <Partners></Partners>
            <StartEarn></StartEarn>
            <Faqs></Faqs>
            <GetStart></GetStart>

        </div>
    );
};

export default Home;