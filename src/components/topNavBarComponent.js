import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TopNavBar = () => {
    return (
        <Container fluid className='topNavBar'>
            <Row>
                <Col>
                    <a href="../index.js"><p>HOME</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>PLANS</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>PRICING</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>BLOG</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>DOCUMENTATION</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>COMPANY</p></a>
                </Col>
            </Row>
        </Container>

    )
}

export default TopNavBar;


                