import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const BottomNavBar = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <a href="../index.js"><p>TODAY</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>TAGS</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>STATS</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>ANALYSIS</p></a>
                </Col>
                <Col>
                    <a href="../index.js"><p>ALERTS</p></a>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <a href="../index.js"><p>LOG IN</p></a>
                        </Col>
                        <Col>
                            <a href="../index.js"><p>&gt; SIGN IN</p></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomNavBar;