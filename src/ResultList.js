import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt="" className="img-fluid" src={result.picture.large} />
        </li>
      ))}
    </ul>

    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt="" className="img-fluid" src={result.picture.large} />
        </li>
      ))}
    </ul>
  );
}



export default ResultList;
