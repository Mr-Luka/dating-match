import React, {Component} from "react";

import "./main.css";

class App extends Component {

  render() {
    return(
      <div className="filters">
        <h1 className="filters__header">Filter by:</h1>
        <hr/>
        <ul className="filters-list">
          <li className="filter">
            <span>
              <input 
                type="checkbox"
                className="filter__checkbox"
                />
            </span>
            <span className="filter__match-count"></span>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;