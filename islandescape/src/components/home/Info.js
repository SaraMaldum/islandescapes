import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import H2 from '../layout/headings/Heading2';
import StyledButton from '../../styles/Button';
import styled from 'styled-components';

const StyledCol = styled( Col )`
    margin: 10px 0 20px 0;
`

function Info() {
    return (
        <>
            <Container>
                <Row>
                    <StyledCol md={3}>
                        <H2 h2="Package 1"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 2"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 3"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 4"></H2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                </Row>
            </Container >
        </>
    )
}

export default Info;