import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import CardList from "./components/card/CardList";
import Form from "./components/form/Form";
import SearchForm from "./components/form/SearchForm";
import { getPeople } from "./redux/slices/people";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <div className="container">
      <SearchForm />
      <Form />
      <CardList data={dispatch(getPeople())} />
    </div>
  );
}

export default App;
