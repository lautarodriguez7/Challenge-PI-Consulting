import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import SearchForm from "./components/form/SearchForm";
import {
  fetchPeople,
  removePeople,
  addNewPeople,
  searchPeopleName,
} from "./redux/slices/people";
function App() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.listPeople);
  const addPeople = (data) => dispatch(addNewPeople(data));
  const deletePeople = (index) => {
    dispatch(removePeople(index));
  };
  const searchPeople = (data) => dispatch(searchPeopleName(data));
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  return (
    <div className="container">
      {/* <CardList /> */}
      <SearchForm search={searchPeople} />
      <Form dataPeople={addPeople} />
      <Card data={people} deletePeople={deletePeople} />
    </div>
  );
}

export default App;
