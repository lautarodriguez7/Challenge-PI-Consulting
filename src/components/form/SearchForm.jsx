import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredPeople, fetchPeople } from "../../redux/slices/people";

export default function SearchForm() {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const filterUsers = () => {
    dispatch(filteredPeople(inputRef.current.value));
  };
  console.log(inputRef.current.value);
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
