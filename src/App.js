import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Results from './components/Results';
import Fixtures from './components/Fixtures';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page : 'home' };
    this.displayPage = this.displayPage.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page : newPage });
  }

  displayPage() {
    if (this.state.page === 'Results') {
      return <Results />
    } else if (this.state.page === 'Fixtures') {
      return <Fixtures />
    } else {
      return (
        <div>
          <Jumbotron />
          <Cards />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Header link1="Fixtures" link2="Results" onClick={this.changePage} />
        {this.displayPage()}
      </div>
    );
  }
}

export default App;
