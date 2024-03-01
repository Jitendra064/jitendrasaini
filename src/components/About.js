import React from "react";
import "./About.css";
import img5 from "../img/img-8.jpg";

const About = () => {
  return (
    <>
      <div class="mb-3 mt-5 about" id="About">
        <div class="row justify-content-evenly container-fluid pt-3">
          <div class="col-md-5">
            <img src={img5} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title text-center about-cls">ABOUT US</h5>
              <p class="card-text para-1">
                I have completed web development at Zeetron Networks Institute
                pvt Ltd
              </p>
              <p class="para-2">Complate Cousre</p>
              <p class="para-3">
                HTML <br />
                CSS <br />
                Javascript and EcmaScript 6 <br />
                Bootstrap <br />
                React JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
