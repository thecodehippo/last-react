import React from 'react';

class ButtonCard extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newCard = e.target.value
    this.props.onClick(newCard);
  }

  render() {
    return (
      <div className="container col-md-4">
        <button value={this.props.card} onClick={this.handleClick} className={this.props.selected === this.props.card ? 'btn btn-primary' : 'btn btn-light'}>
          Press Me
        </button>
      </div>
    )
  }
}

export default ButtonCard
