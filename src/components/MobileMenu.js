import React from 'react';
import navImage from '../images/nav-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function collapseMobileMenu() {
    document.getElementById('mobile-menu').style.display = "none";
    document.getElementById('footer').style.display = "block";
}

const MobileMenu = () => {
    return (
        <div className='mobile-menu'>
            <div className='top-row'>
                <a href="../index.js"><img className='nav-img' src={navImage} alt="grey-noise logo" /></a>
                <a href="../index.js"><FontAwesomeIcon className='x-icon' icon={faXmark} onClick={collapseMobileMenu} /></a>
            </div>
            <div className="mobile-menu-items">
                <a href="../index.js"><p>VISUALIZER</p></a>
                <a href="../index.js"><p>PLANS</p></a>
                <a href="../index.js"><p>COMPANY</p></a>
                <a href="../index.js"><p>PRICING</p></a>
                <a href="../index.js"><p>BLOG</p></a>
                <a href="../index.js"><p>DOCUMENTATION</p></a>
            </div>
            <div className='mobile-login-col'>
                <div className='big-btn big-login-btn'>
                    <p>LOG IN</p>
                </div>
                <div className='big-btn big-signup-btn'>
                    <p>&gt; SIGN UP</p>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;