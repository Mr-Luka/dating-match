import React from "react";
import { guys } from "../data.js";

const getMatchCount = filterKey => guys.filter(guy=>guy[filterKey].length);

const Filter = props => {
    onChange = () => props.toggleFilter(props.filter.key);
    const matchCount = getMatchCount (props.filter.key);
    return (
        <li>
            <span>
                <input 
                    type="checkbox"
                    checked={props.isChecked}
                    onChange={onChange}
                    className="filter__checkbox"
                    />
                    {props.filter.display}
            </span>
            <span className="filter__match-count">{matchCount}</span>
        </li>
    )
}

export default Filter;