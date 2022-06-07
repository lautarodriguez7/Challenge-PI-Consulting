import React from "react";
import { deletePeople } from "../../redux/slices/people";
export default function Row({ item, index }) {
  // console.log(item);
  console.log(index);
  return (
    <div className="container m-2" key={index}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Height: {item.height}</li>
          <li className="list-group-item">Mass: {item.mass}</li>
        </ul>
        <a
          href="#"
          className="btn btn-danger"
          onClick={() => deletePeople(index)}
        >
          Delete
        </a>
      </div>
    </div>
  );
}
