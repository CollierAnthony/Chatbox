import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './Infobar.css'

const InfoBar = ({ room }) => (
    <div className='infoBar'>
        <div className="leftInnerContainer">
            <img className="onlineIcon" alt="" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"> <img src={closeIcon} alt="" /></a>
        </div>
    </div>
)

export default InfoBar;