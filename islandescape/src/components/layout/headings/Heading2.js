import React from 'react';
import PropTypes from 'prop-types';

function Heading2( { h2 } ) {
    return <h2>{h2}</h2>;
}

Heading2.propTypes = {
    h2: PropTypes.string.isRequired,
}

export default Heading2;