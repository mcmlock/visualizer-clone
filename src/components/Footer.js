import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <h3>VISUALIZER</h3>
                        <ul>
                            <li>Today</li>
                            <li>Tags</li>
                            <li>Stats</li>
                            <li>Pulse</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>RESOURCES</h3>
                        <ul>
                            <li>Documentation</li>
                            <li>Integrations</li>
                            <li>Service Status</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>
                            COMPANY
                        </h3>
                        <ul>
                            <li>Careers</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>BLOG</h3>
                    </Col>
                    <Col>
                        <h3>PRICING</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;