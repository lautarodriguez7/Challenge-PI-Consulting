import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/card/Card";
import { fetchPeople } from "./redux/slices/people";
function App() {
  const [dataPeople, setDataPeople] = useState([]);
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.listPeople);

  const deletePeople = (index) => {
    const arrayFilter = dataPeople.filter((item, i) => i !== index);
    setDataPeople(arrayFilter);
  };

  useEffect(() => {
    dispatch(fetchPeople());
    setDataPeople(people);
  }, []);
  return (
    <div className="container">
      <Card data={dataPeople} deletePeople={deletePeople} />
    </div>
  );
}

export default App;
