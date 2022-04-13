import React, { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';
export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = { value: this.props.initialValue };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
