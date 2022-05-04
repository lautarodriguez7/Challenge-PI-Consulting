import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ dataPeople }) {
  const [getData, setGetData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setGetData([...getData, data]);
    console.log(dataPeople + getData);
    // getData.push(data);
    // console.log(getData);
  };

  return (
    <div className="container col-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            {...register("name", { required: true })}
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("height", { required: true })}
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Height</label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("mass", { required: true })}
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Mass</label>
          <input type="submit" className="btn btn-primary mt-2" />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}
