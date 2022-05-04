import React from "react";

export default function Card({ data, deletePeople }) {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="container m-2" key={index}>
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <b>Height: </b>
                      {item.height}
                    </p>
                    <p className="card-text">
                      <b>Mass: </b>
                      {item.mass}
                    </p>
                    <hr />
                    <a
                      href="#"
                      className="btn btn-danger"
                      onClick={() => deletePeople(index)}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
