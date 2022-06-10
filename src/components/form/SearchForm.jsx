import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredPeople } from "../../redux/slices/people";

export default function SearchForm() {
  useEffect(() => {}, []);

  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onClick = () => {
    dispatch(filteredPeople(value));
  };

  return (
    <div className="container d-flex bd-highlight">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="  form-control m-2"
      />
      <button value="Search" className="btn btn-primary m-2" onClick={onClick}>
        Search
      </button>
    </div>
  );
}
