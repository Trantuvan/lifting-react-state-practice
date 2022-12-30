import React from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TemperatureInput({ scale, temp, handleChange }) {
  return (
    <form className="max-w-sm bg-white shadow-md px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">
          Enter temperature in {scaleNames[scale]}:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="temperature"
          type="text"
          name="temperature"
          value={temp}
          onChange={(evt) => {
            evt.preventDefault();
            handleChange(evt.target.value);
          }}
        />
      </div>
    </form>
  );
}

TemperatureInput.propTypes = {
  scale: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  temp: PropTypes.string.isRequired,
};
