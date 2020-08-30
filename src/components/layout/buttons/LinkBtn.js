import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLinkBtn = styled(Link)`
    color: white;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border: 1px solid #ff9000;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.tertiaryColor};
        border: 1px solid #ff9000;
        color: #ff9000;
        transition: 0.4s;
    }
`

export default StyledLinkBtn;