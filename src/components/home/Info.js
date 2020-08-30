import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading2 from '../layout/headings/Heading2';
import StyledLinkBtn from '../layout/buttons/LinkBtn';
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
                        <Heading2 h2="Package 1"></Heading2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 2"></Heading2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 3"></Heading2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 4"></Heading2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                </Row>
            </Container >
        </>
    )
}

export default Info;