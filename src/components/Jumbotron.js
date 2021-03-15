import React from 'react';
import ButtonJumbotron from './ButtonJumbotron';

let buildClass = '';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1Size : 4,
    };
    this.changeSize = this.changeSize.bind(this);
  }

  changeSize() {
    let newSize = Math.floor(Math.random() * 5);
    this.setState({ h1Size : newSize })
    buildClass = `display-${this.state.h1Size}`;
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className={buildClass}>Welcome!</h1>
          <p className="lead">Pick your team for each round, if they lose you're out and the winner is the last man standing</p>
          <p id="greeting"></p>
          <ButtonJumbotron onClick={this.changeSize} />
        </div>
      </div>
    )
  }
}
