import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
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
            <div className='info-div'>
                <div className='icon-row'>
                <a href="../index.js"><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a>
                <a href="../index.js"><FontAwesomeIcon icon={faLinkedinIn} className='social-icon' /></a>
                </div>
                <p style={{fontSize: 9.0, margin: 'auto'}}>Copyright © 2021 GreyNoise</p>
                <div className='bottommostRow'>
                    <a href="../index.js"><p className='border-right-active'>Terms</p></a>
                    <a href="../index.js"><p className='border-right-active'>Privacy</p></a>
                    <a href="../index.js"><p className='border-right-active'>Cookie</p></a>
                    <a href="../index.js"><p>Patent</p></a>
                </div>
            </div>
        </div >
    );
}

export default Footer;