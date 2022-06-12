import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredPeople } from "../../redux/slices/people";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(filteredPeople(e.target.value));
  };

  return (
    <div className="container d-flex bd-highlight">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        className="  form-control m-2"
      />
    </div>
  );
}
