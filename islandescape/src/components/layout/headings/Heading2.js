import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Headings = styled.h2`
    color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
`

function Heading2( { h2 } ) {
    return <Headings>{h2}</Headings>;
}

Heading2.propTypes = {
    h2: PropTypes.string.isRequired,
}

export default Heading2;