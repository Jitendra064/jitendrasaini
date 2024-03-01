import React from "react";
import "./Services.css";

import img7 from "../img/img-7.webp";
const Services = () => {
  return (
    <>
      <div class="formContainer pt-4 mt-3" id="Contact">
        <div class="row d-flex container-fluid justify-content-evenly">
          <div class="col-md-5">
            <form>
              <h5 class="text-center cont-heading">CONTACT ME</h5>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div class="col-md-6 contact-img">
            <img src={img7} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
