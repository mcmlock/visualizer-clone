import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>VISUALIZER</h3>
                    <ul>
                        <li>Today</li>
                        <li>Tags</li>
                        <li>Stats</li>
                        <li>Pulse</li>
                    </ul>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>RESOURCES</h3>
                    <ul>
                        <li>Documentation</li>
                        <li>Integrations</li>
                        <li>Service Status</li>
                    </ul>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Careers</li>
                    </ul>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>BLOCK</h3>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>PRICING</h3>
                </div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                </div>
                <p>Copyright © 2021 GreyNoise</p>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookie</li>
                    <li>Patents</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;