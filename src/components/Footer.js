import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
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
    );
}

export default Footer;