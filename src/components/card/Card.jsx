import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

export default function Card({ data, deletePeople }) {
  const filterData = useSelector((state) => state.people.filterData);
  console.log(filterData);
  console.log(data);
  return (
    <div>
      {filterData === null
        ? data.map((item, index) => (
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
          ))
        : filterData.map((item, index) => (
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
          ))}
    </div>
  );
}
