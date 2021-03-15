import React from 'react';

let color = 'rgb(35, 64, 248)';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { buttonColor: color }
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    let col1 = Math.floor(Math.random() * 256);
    let col2 = Math.floor(Math.random() * 256);
    let col3 = Math.floor(Math.random() * 256);
    let nColor = `rgb(${col1},${col2},${col3})`;
    this.setState({ buttonColor: nColor })
  }

  render() {
    return (
      <div className="container col-md-4">
        <button style={{background: this.state.buttonColor}} onClick={this.randomColor}>
        Press Me
        </button>
      </div>
    )
  }
}

export default Button
