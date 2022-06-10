import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";
export default function Card({ data, deletePeople }) {
  const filterData = useSelector((state) => state.people.filterData);

  return (
    <div>
      {filterData === null
        ? data.map((item, index) => (
            <Row
              item={item}
              index={index}
              deletePeople={deletePeople}
              key={index}
            />
          ))
        : filterData.map((item, index) => (
            <Row
              item={item}
              index={index}
              deletePeople={deletePeople}
              key={index}
            />
          ))}
    </div>
  );
}
