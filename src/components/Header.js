import React from "react";
import homeIco from '../assets/home-circle.png';

const Header = () => {
    return (
        <div className='headerWrapper'>
            <div className='headerWrapper_leftSide'>
                <img src={homeIco} alt="home-button"/>
            </div>
            <div className='headerWrapper_rightSide'>
                <span>TEAMLEADER:</span><span> NAME </span>
            </div>
        </div>
    )
}

export default Header;