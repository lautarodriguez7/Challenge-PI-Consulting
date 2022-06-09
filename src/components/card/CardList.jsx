import React, { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePeople } from "../../redux/slices/people";

export default function CardList() {
  const dispatch = useDispatch();

  const Card = lazy(() => import("./Card"));

  const people = useSelector((state) => state.people.listPeople);

  const deletePeople = (index) => {
    dispatch(removePeople(index));
  };

  return (
    <div>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <Card data={people} deletePeople={deletePeople} />
      </Suspense>
    </div>
  );
}
