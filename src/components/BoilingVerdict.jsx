import React from 'react';
import PropTypes from 'prop-types';

export default function BoilingVerdict({ celsius }) {
  return celsius >= 100 ? <p>The wather would boil.</p> : <p>The water would not boil.</p>;
}

BoilingVerdict.propTypes = { celsius: PropTypes.string.isRequired };
