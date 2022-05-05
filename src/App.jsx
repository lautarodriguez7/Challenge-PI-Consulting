import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CardList from "./components/card/CardList";
import Form from "./components/form/Form";
import SearchForm from "./components/form/SearchForm";
import { fetchPeople, removePeople, addNewPeople } from "./redux/slices/people";

function App() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.listPeople);
  const addPeople = (data) => dispatch(addNewPeople(data));
  const deletePeople = (index) => {
    dispatch(removePeople(index));
  };
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  return (
    <div className="container">
      <SearchForm dispatch={dispatch} people={people} />
      <Form dataPeople={addPeople} />
      <CardList data={people} deletePeople={deletePeople} />
    </div>
  );
}

export default App;
