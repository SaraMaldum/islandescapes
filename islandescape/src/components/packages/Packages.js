import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../layout/menu/header/Header';
import H2 from '../layout/headings/Heading2';
import styled from 'styled-components';
import StyledButton from '../layout/Button';

const StyledCol = styled( Col )`
    border: 1px solid #ff9000;
    padding: 10px;
    margin: 10px;

    &:hover {
        background-color: #fdf6ec;
    }
`

function Packages() {
    return (
        <>
            <Header>Our packages</Header>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Container>
                <Row>
                    <StyledCol md={3}>
                        <H2 h2="Package 1"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 2"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 3"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 4"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 5"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 6"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 7"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <H2 h2="Package 8"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>

                    <StyledCol md={3}>
                        <H2 h2="Package 9"></H2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                </Row>

            </Container >

        </>
    )
}

export default Packages;