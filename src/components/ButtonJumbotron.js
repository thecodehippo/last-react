import React from 'react';

class ButtonJumbotron extends React.Component {

  render() {
    return (
      <div className="container col-md-4">
        <button className="btn btn-light" onClick={this.props.onClick}>
          Change Header Size
        </button>
      </div>
    )
  }
}

export default ButtonJumbotron
