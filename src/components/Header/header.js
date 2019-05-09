import React from 'react';
import './header.css';
import EAFC from '../Assets/Images/EAFC.png';
import BOATS from '../Assets/Images/boatAndSea.jpg';
import FishingBoats from '../Assets/Images/FishBoats.jpg';


const header = () => {
    return (
        <div className='header'>
            {/* <img src={FishingBoats} className='boats' /> */}
            <img src={EAFC} className='logo' />
            <img src={BOATS} className='boat' />
        </div>
    )
}

export default header;