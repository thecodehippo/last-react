import React from 'react';
import rugbyFixtures from '../data/FixturesData';

class Results extends React.Component {
  createTable = () => {
    let table = [];

    for (let i = rugbyFixtures.results.length - 1; i >= 0; i--) {

      if (rugbyFixtures.results[i].status !== 'Not Started') {
        let evDate = new Date(rugbyFixtures.results[i].date)

        if (rugbyFixtures.results[i].home_score > rugbyFixtures.results[i].away_score) {
          let evDate = new Date(rugbyFixtures.results[i].date)
          table.push(
            <tr key={`row${i}`}>
              <td>{evDate.toDateString()}</td>
              <td className="bg-success">{rugbyFixtures.results[i].home}</td>
              <td className="bg-success">{rugbyFixtures.results[i].home_score}</td>
              <td>{rugbyFixtures.results[i].away_score}</td>
              <td>{rugbyFixtures.results[i].away}</td>
            </tr>
          )
        } else if (rugbyFixtures.results[i].home_score < rugbyFixtures.results[i].away_score) {
          table.push(
            <tr key={`row${i}`}>
              <td>{evDate.toDateString()}</td>
              <td>{rugbyFixtures.results[i].home}</td>
              <td>{rugbyFixtures.results[i].home_score}</td>
              <td className="bg-success">{rugbyFixtures.results[i].away_score}</td>
              <td className="bg-success">{rugbyFixtures.results[i].away}</td>
            </tr>
          )
        } else {
          table.push(
            <tr key={`row${i}`}>
              <td>{evDate.toDateString()}</td>
              <td>{rugbyFixtures.results[i].home}</td>
              <td>{rugbyFixtures.results[i].home_score}</td>
              <td>{rugbyFixtures.results[i].away_score}</td>
              <td>{rugbyFixtures.results[i].away}</td>
            </tr>
          )
        }
      }
    }
    return table
  }

  render() {
    return(
      <div>
        <h1>Gallagher Premiership Results - 2021</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Home</th>
              <th scope="col">Home Score</th>
              <th scope="col">Away Score</th>
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

export default Results
