import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import styled from 'styled-components';
import StyledLinkBtn from '../layout/buttons/LinkBtn';
import SubHeading from '../layout/headings/SubHeading';


const StyledCol = styled( Col )`
    border: 1px solid #ff9000;
    padding: 10px;
    margin: 10px;

    &:hover {
        background-color: ${({theme}) => theme.colors.tertiaryColor};  
}
`

const StyledRow = styled( Row )`
    margin-bottom: 20px;
    justify-content: center;
`;

function Packages() {
    return (
        <>
            <Container>
                <Heading1>Our packages</Heading1>
                <SubHeading>Here you'll find all the packages we can provide. Dive in, and contact us if you have any questions.</SubHeading>
                <StyledRow>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 1"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 2"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 3"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 4"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 5"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 6"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 7"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                    <StyledCol md={3}>
                        <Heading2 h2="Package 8"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>

                    <StyledCol md={3}>
                        <Heading2 h2="Package 9"></Heading2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum.</p>
                        <StyledLinkBtn to="/Packages" className="btn">Read more</StyledLinkBtn>
                    </StyledCol>
                </StyledRow>

            </Container >

        </>
    )
}

export default Packages;