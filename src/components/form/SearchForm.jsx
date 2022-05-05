import React from "react";

export default function SearchForm({ search }) {
  console.log(search);
  return (
    <div className="container d-flex bd-highlight">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
        className="  form-control m-2"
      />
      <button value="Search" className="btn btn-primary m-2">
        Search
      </button>
    </div>
  );
}
