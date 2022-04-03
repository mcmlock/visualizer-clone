import React from 'react';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function expandMobileMenu() {
    document.getElementById('mobile-menu').style.display = "block";
    document.getElementById('footer').style.display = "none";
}

const BottomNavBar = () => {
    return (
        <div>
            <div className="bottomNavBarMobile">
                <FontAwesomeIcon icon={faBars} id="expand-btn" className="expand-btn" onClick={expandMobileMenu} />
                <div id="mobile-menu" style={{display: 'none'}} >
                    <MobileMenu />
                </div>
            </div>
            <div className='bottomNavBarDesktop'>
                <div className='bottomNavBarLeft'>
                    <a href="../index.js"><p>TODAY</p></a>
                    <a href="../index.js"><p>TAGS</p></a>
                    <a href="../index.js"><p>STATS</p></a>
                    <a href="../index.js"><p>ANALYSIS</p></a>
                    <a href="../index.js"><p>ALERTS</p></a>
                </div>
                <div className='bottomNavBarRight'>
                    <a href="../index.js"><p>LOG IN</p></a>
                    <div className="signUpButton">
                        <a href="../index.js"><p>&gt; SIGN UP</p></a>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default BottomNavBar;