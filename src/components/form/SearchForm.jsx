import React, { useRef } from "react";
import { filteredPeople, fetchPeople } from "../../redux/slices/people";

export default function SearchForm({ dispatch, people }) {
  const inputRef = useRef("");
  const filterUsers = () => {
    dispatch(filteredPeople(inputRef.current.value));
  };

  const handleChange = (e) =>
    inputRef.current.value === "" ? dispatch(fetchPeople()) : null;
  return (
    <div className="container d-flex bd-highlight">
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={handleChange}
        className="  form-control m-2"
      />
      <button
        value="Search"
        className="btn btn-primary m-2"
        onClick={filterUsers}
      >
        Search
      </button>
    </div>
  );
}
