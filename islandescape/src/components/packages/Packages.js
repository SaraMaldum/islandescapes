import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../layout/header/Header';
import H2 from '../layout/headings/Heading2';

function Packages() {
    return (
        <>
            <Header title="Which package suites you?" />
            <Container>
                <Row>
                    <Col md={3}>
                        <H2 h2="Package 1"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 2"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 3"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 4"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 5"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 6"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 7"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 8"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 9"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                </Row>

            </Container >

        </>
    )
}

export default Packages;