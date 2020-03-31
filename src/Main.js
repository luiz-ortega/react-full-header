import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title }) => (
    <h1>Hello {title}!</h1>
);

FullHeader.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FullHeader;
