import React, { Component } from 'react';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[this.state.activeOptionIdx];

    return (
      <div>
        <h2>Color Picker</h2>
        <p>Выбран:{label} </p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                style={{
                  backgroundColor: color,
                  border:
                    index === activeOptionIdx ? '2px solid black' : 'none',
                }}
                onClick={() => this.setActiveIdx(index)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
