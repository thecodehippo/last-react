import React from 'react';
import WinnerIcon from '../images/winner-icon.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newPage = e.target.title;
    this.props.onClick(newPage);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-dark d-none d-sm-none d-md-flex">
          <div className="container col-md-10">
            <div onClick={this.handleClick} title="home" className="text-white font-weight-bold navbar-brand">
              <img className="winner-icon" src={WinnerIcon} alt="winner icon" />
              Last Man Standing
            </div>
            <ul className="navbar-nav pull-xs-right">
              <li className="nav-item">
                <p onClick={this.handleClick} title={this.props.link1} className="nav-link text-light">
                  {this.props.link1}
                </p>
              </li>

              <li className="nav-item ml-md-5">
                <p onClick={this.handleClick} title={this.props.link2} className="nav-link text-light">
                  {this.props.link2}
                </p>
              </li>
            </ul>
          </div>
        </nav>
          <ul className="nav fixed-bottom bg-dark text-light d-md-none">
            <li className="nav-item text-center col-sm-6 col-6">
              <p onClick={this.handleClick} title={this.props.link1} className="nav-link text-light">
            </li>
            <li className="nav-item text-center col-sm-6 col-6">
              <p onClick={this.handleClick} title={this.props.link2} className="nav-link text-light">
            </li>
        </ul>
      </div>
    )
  }
}

export default Header
