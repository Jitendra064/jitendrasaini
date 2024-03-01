/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" target="_blank" className="me-4 text-reset">
              <i className="bi bi-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/JSaini81235"
              target="_blank"
              className="me-4 text-reset"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/onetap/?next=%2F"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jitendra-saini-645a69284/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Jitendra064"
              target="_blank"
              className="me-4 text-reset"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>Zeetron Network pvt ltd . India</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#" className="text-reset">
                    Node
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Bootstrap
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#" className="text-reset">
                    portfolio
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Biography
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house me-3"></i> Alwar, RJ 301408,
                  Rajasthan ,India
                </p>
                <p>
                  <i className="bi bi-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="bi bi-telephone me-3"></i> + 8955455051
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            jitendra.in
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
