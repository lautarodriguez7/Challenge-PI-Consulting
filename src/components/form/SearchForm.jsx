import React from "react";

export default function SearchForm() {
  return (
    <div className="container d-flex bd-highlight">
      <input type="text" placeholder="Search" className="  form-control m-2" />
      <button value="Search" className="btn btn-primary m-2">
        Search
      </button>
    </div>
  );
}
