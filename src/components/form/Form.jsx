import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ dataPeople }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dataPeople(data);
  };

  return (
    <div className="container col-6">
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + New
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
                New People
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
                    placeholder="Alan Perez"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    {...register("height", { required: true })}
                    className="form-control"
                    placeholder="178"
                    type="number"
                  />
                  <label htmlFor="floatingInput">Height</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    {...register("mass", { required: true })}
                    className="form-control"
                    placeholder="ej. 77"
                    type="number"
                  />
                  <label htmlFor="floatingInput">Mass</label>
                  <input type="submit" className="btn btn-primary mt-2" />
                </div>
                {errors.name && (
                  <span className="form-control form-control-sm m-1 alert-danger">
                    This name is required
                  </span>
                )}
                {errors.height && (
                  <span className="form-control form-control-sm m-1 alert-danger">
                    This height is required
                  </span>
                )}
                {errors.mass && (
                  <span className="form-control form-control-sm m-1 alert-danger">
                    This mass is required
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
