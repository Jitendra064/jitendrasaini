/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./Home.css";
import React, { useEffect } from "react";
import homeImg from "../img/img-4.jpg";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const Home = (props) => {
  useEffect(() => {
    var typed = new Typed(".multitask", {
      strings: ["React developer", "Web deployment", " Web designer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      startDelay: 1000,
      backDelay: 1500,
    });
  }, []);

  return (
    <div>
      <div class="home mt-2" id="Home">
        <div class="row home01 container-fluid d-flex justify-content-evenly">
          <div class="col-md-5 col-sm-5">
            <img src={homeImg} alt="" class="img-fluid pt-4" />
          </div>
          <div class="col-md-5 col-sm-5 homeBio wrapper">
            <h1>
              Hi <br />
              I'm <span>J</span>itendra <br />
              <span class="multitask" id="saon">
                React developer
              </span>
            </h1>
            <p class="pt-1">
              I think goals should never be easy , they should force you to work
              even if they are uncomfortable at the time .
            </p>

            <button class="btn">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
