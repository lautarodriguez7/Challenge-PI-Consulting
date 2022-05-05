import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredPeople } from "../../redux/slices/people";

export default function SearchForm() {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const filterUsers = () => {
    dispatch(filteredPeople(inputRef.current.value));
  };
  return (
    <div className="container d-flex bd-highlight">
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
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
