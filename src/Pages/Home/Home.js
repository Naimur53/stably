import React from 'react';
import BattleTested from '../../Components/BattleTested/BattleTested';
import DataProtected from '../../Components/DataProtected/DataProtected';
import Partners from '../../Components/Partners/Partners';
import StartEarn from '../../Components/StartEarn/StartEarn';
import VarietyAssets from '../../Components/VarietyAssets/VarietyAssets';

const Home = () => {
    return (
        <div >
            <VarietyAssets></VarietyAssets>
            <DataProtected></DataProtected>
            <BattleTested></BattleTested>
            <Partners></Partners>
            <StartEarn></StartEarn>

        </div>
    );
};

export default Home;