import React from "react";
import allStates from "../allStates"
import { v4 as idGenerator } from 'uuid';

class PessoalStates extends React.Component {
  render() {
    return (
      <label htmlFor="states">Estados
        <select className="states" name="states">
          {allStates.map(({ label }) => (
          <option key={idGenerator()} value={label}>{label}</option>
        ))}
        </select>
      </label>
    )
  }
}

export default PessoalStates;