import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ dataPeople }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dataPeople(data);
  };

  return (
    <div className="container col-6">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                {errors.name && <span> This name is required </span>}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
