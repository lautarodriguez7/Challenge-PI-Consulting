import React, { Suspense, lazy } from "react";

export default function CardList() {
  const Card = lazy(() => import("./Card"));

  return (
    <div>
      <Suspense fallback={<h1 className="alert alert-danger">Loading...</h1>}>
        <Card data={dataPeople} deletePeople={deletePeople} />
      </Suspense>
    </div>
  );
}
