import React from 'react';
import ButtonCard from './ButtonCard';

export default class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected : 'none' }
    this.changeCard = this.changeCard.bind(this);
  }

  changeCard(newCard) {
    this.setState({ selected : newCard })
  }

  render() {
    return (
      <div className="row m-0">
        <div className="col-sm-4">
          <div className="card bg-dark text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <ButtonCard onClick={this.changeCard} selected={this.state.selected} card="first" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-dark text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <ButtonCard onClick={this.changeCard} selected={this.state.selected} card="middle" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-dark text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <ButtonCard onClick={this.changeCard} selected={this.state.selected} card="last" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
