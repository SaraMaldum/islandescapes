import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import styled from 'styled-components';
import StyledButton from '../contact/Button';

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
            <Heading1>Our packages</Heading1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Container>
                <Row>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 1"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 2"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 3"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 4"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 5"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 6"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 7"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 8"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledButton type="button" className="btn">Read more</StyledButton>
                    </StyledCol>

                    <StyledCol md={3}>
                        <Heading2 h2="Package 9"></Heading2>
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