import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className='footer-menu'>
                <div className='footer-menu-col'>
                    <h6>VISUALIZER</h6>
                    <a href="../index.js"><p>Today</p></a>
                    <a href="../index.js"><p>Tags</p></a>
                    <a href="../index.js"><p>Stats</p></a>
                    <a href="../index.js"><p>Pulse</p></a>
                </div>
                <div className='footer-menu-col'>
                    <h6>RESOURCES</h6>
                    <a href="../index.js"><p>Documentation</p></a>
                    <a href="../index.js"><p>Integrations</p></a>
                    <a href="../index.js"><p>Service Status</p></a>
                </div>
                <div className='footer-menu-col'>
                    <h6>COMPANY</h6>
                    <a href="../index.js"><p>Careers</p></a>
                </div>
                <div className='footer-menu-col'>
                    <a href="../index.js"><h6>Blog</h6></a>
                </div>
                <div className='footer-menu-col'>
                    <a href="../index.js"><h6>Pricing</h6></a>
                </div>
            </div>
            <hr className='footer-hr' style={{color: 'white', margin: '20.0px auto 20.0px auto', height: '0.5px'}} />
            <div className='info-div'>
                <div className='icon-row'>
                <a href="../index.js"><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a>
                <a href="../index.js"><FontAwesomeIcon icon={faLinkedinIn} className='social-icon' /></a>
                </div>
                <p className='copyright-p'>Copyright © 2021 GreyNoise</p>
                <div className='bottommostRow'>
                    <a href="../index.js"><p>Terms<span className="extra-words"> of Service</span></p></a>
                    <div className="vertical-line" />
                    <a href="../index.js"><p>Privacy<span className="extra-words"> Policy</span></p></a>
                    <div className="vertical-line" />
                    <a href="../index.js"><p>Cookie</p></a>
                    <div className="vertical-line" />
                    <a href="../index.js"><p>Patents</p></a>
                </div>
            </div>
        </div >
    );
}

export default Footer;