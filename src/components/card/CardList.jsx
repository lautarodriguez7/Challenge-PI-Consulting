import React, { Suspense, lazy } from "react";

export default function CardList({ data, deletePeople }) {
  const Card = lazy(() => import("./Card"));

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
