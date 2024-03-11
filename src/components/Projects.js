/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="text-center p-4 mt-5 card01" id="Project">
        <h5 className="fs-1">Many project to Create Easy to Simplify</h5>
        <p className="fs-6">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a
          href="https://jitendra064.github.io/personalyportfolio/"
          className="btn btn-primary m-1"
          target="_blank"
        >
         PortFolio 
        </a>
        <a
          href="https://react-product-application.netlify.app"
          className="btn btn-primary m-1"
          target="_blank"
        >
         ReactBase E-Commerce page
        </a>
        <a
          href="https://jitendra064.github.io/osfort/"
          className="btn btn-primary m-1"
          target="_blank"
        >
          Eduaction Website 
        </a>
        <a
          href="https://jitendra064.github.io/food/"
          target="_blank"
          className="btn btn-primary m-1"
        >
          Food Restaurant 
        </a>
        <a
          href="https://jitendra064.github.io/Ecommerce/"
          target="_blank"
          className="btn btn-primary m-1"
        >
          E-commerce 
        </a>
      </div>

      <div class="row mt-3 p-3 container-fluid">
        <div class="col-sm-6 pt-2">
          <div class="card bg-dark text-light">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 pt-2">
          <div class="card bg-dark text-light">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                I completed my Web Development at Zeetron Ne
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
