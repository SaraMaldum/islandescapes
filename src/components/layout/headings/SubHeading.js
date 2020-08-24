import styled from 'styled-components'

const SubHeading = styled.p`
    font-weight: bold; 
    font-style: italic;
    margin: -10px 0 20px 30px;
    color: ${({theme}) => theme.colors.primaryColor};
`;

export default SubHeading;