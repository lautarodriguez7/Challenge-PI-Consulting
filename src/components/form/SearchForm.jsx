import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredPeople } from "../../redux/slices/people";

export default function SearchForm() {
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const filterUsers = () => {
    dispatch(filteredPeople(inputRef.current.value.toLowerCase()));
  };

  const handleChange = (e) => inputRef.current.value === "" && filterUsers();

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
