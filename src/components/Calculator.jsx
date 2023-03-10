import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleCelciusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c',
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f',
    });
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temp={celsius} handleChange={this.handleCelciusChange} />
        <TemperatureInput scale="f" temp={fahrenheit} handleChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}
