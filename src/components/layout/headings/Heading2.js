import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading2 = styled.h2`
    color: ${({theme}) => theme.colors.primaryColor};
`

function Heading2( { h2 } ) {
    return <StyledHeading2>{h2}</StyledHeading2>;
}

Heading2.propTypes = {
    h2: PropTypes.string.isRequired,
}

export default Heading2;