import React from 'react';
import rugbyFixtures from '../data/FixturesData';
import Pickslip from './Pickslip';

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = { team: [] };
    this.addTeam = this.addTeam.bind(this)
    this.removeTeam = this.removeTeam.bind(this)
  }

  addTeam(e) {
    const t = e.target.value;
    const atArray = [...this.state.team]
    const atIndex = atArray.indexOf(t);
    if (atIndex === -1) {
      this.setState(
        {
          team: [ ...this.state.team, t ]
        }
      )
    }
  }

  removeTeam(t) {
    const rtArray = [...this.state.team];
    const rtIndex = rtArray.indexOf(t);
    rtArray.splice(rtIndex, 1);
    this.setState({ team: rtArray })
  }


  createTable = () => {
    let table = [];

    for (let i = 0; i < rugbyFixtures.results.length; i++) {
      let evDate = new Date(rugbyFixtures.results[i].date)

      if (rugbyFixtures.results[i].status === 'Not Started') {
        table.push(
          <tr key={`row${i}`}>
            <td>{evDate.toDateString()}</td>
            <td><button className="btn btn-dark" onClick={this.addTeam} value={rugbyFixtures.results[i].home}>{rugbyFixtures.results[i].home}</button></td>
            <td><button className="btn btn-dark" onClick={this.addTeam} value={rugbyFixtures.results[i].away}>{rugbyFixtures.results[i].away}</button></td>
          </tr>
        )
      }
    }
    return table
  }

  render() {
    return(
      <div>
        <Pickslip team={this.state.team} onClick={this.removeTeam} />
        <h1>Gallagher Premiership Fixtures - 2021</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Home</th>
              <th scope="col">Away</th>
            </tr>
          </thead>
          <tbody>
          {this.createTable()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Fixtures
