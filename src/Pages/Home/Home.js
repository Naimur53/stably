import React from 'react';
import BattleTested from '../../Components/BattleTested/BattleTested';
import DataProtected from '../../Components/DataProtected/DataProtected';
import VarietyAssets from '../../Components/VarietyAssets/VarietyAssets';

const Home = () => {
    return (
        <div >
            <VarietyAssets></VarietyAssets>
            <DataProtected></DataProtected>
            <BattleTested></BattleTested>
        </div>
    );
};

export default Home;