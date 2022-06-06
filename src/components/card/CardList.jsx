import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { removePeople } from "../../redux/slices/people";
export default function CardList({ data }) {
  const dispatch = useDispatch();
  const Card = lazy(() => import("./Card"));

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
        <Card data={data} deletePeople={deletePeople} />
      </Suspense>
    </div>
  );
}
