import React from 'react';
import rugbyFixtures from '../data/FixturesData';

class Fixtures extends React.Component {
  createTable = () => {
    let table = [];

    for (let i = 0; i < rugbyFixtures.results.length; i++) {
      let evDate = new Date(rugbyFixtures.results[i].date)

      if (rugbyFixtures.results[i].status === 'Not Started') {
        table.push(
          <tr key={`row${i}`}>
            <td>{evDate.toDateString()}</td>
            <td>{rugbyFixtures.results[i].home}</td>
            <td>{rugbyFixtures.results[i].away}</td>
          </tr>
        )
      }
    }
    return table
  }

  render() {
    return(
      <div>
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
