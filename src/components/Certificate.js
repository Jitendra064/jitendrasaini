import React from "react";
import "./Certificate.css";
import cerf1 from "../img/cerf-1.jpg";
import cerf2 from "../img/cerf-2.jpg";
import cerf3 from "../img/cerf-3.jpg";

const Certificate = () => {
  return (
    <>
      <div class="mt-2">
        <h1 class="text-center cerficate">My Certificate</h1>
        <div class="row d-flex flex-wrap mt-3 justify-content-evenly cont-img container-fluid">
          <div class="col-md-5">
            <img src={cerf1} alt="" class="img-fluid" />
          </div>
          <div class="col-md-5">
            <img src={cerf3} alt="" class="img-fluid" />
          </div>
          <div class="col-md-5">
            <img src={cerf2} alt="" class="img-fluid" />
          </div>
          <div class="col-md-5">
            <img src={cerf2} alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
