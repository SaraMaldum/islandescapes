import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import H2 from '../layout/headings/Heading2';

function Info() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <H2 h2="Package 1"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 2"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 3"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                    <Col md={3}>
                        <H2 h2="Package 4"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <Button type="button" className="btn">Read more</Button>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Info;