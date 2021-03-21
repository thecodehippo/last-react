import React from 'react';

const Pickslip = (props) => {

  const createPickslip = () => {
    let table = [];

    for (let i = 0; i < props.team.length; i++) {
      table.push(
        <li className="list-group-item" key={`t${i}`}>{props.team[i]}
        <button onClick={dropTeam} value={props.team[i]} className="btn btn-danger float-right">REMOVE</button>
        </li>
      )
    }
    return table;
  }

  const dropTeam = (e) => {
    const f = e.target.value;
    props.onClick(f);
  }


  return (
    <div>
      <ul className="list-group">
        {createPickslip()}
      </ul>
    </div>
  )
}


export default Pickslip
