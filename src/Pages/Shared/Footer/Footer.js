import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer  */}
      <footer className="text-center text-lg-start bg-dark text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right  */}
          <div>
            <a
              href="https://www.facebook.com/shazidnawas.shovon/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://shazidnawasshovon.github.io/My-Web-Protfoliyo/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shazidnawasshovon/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ShazidNawasShovon"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right  */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* < Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Dream Car
                </h6>
                <p>With us you can get Best Car Deals.</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}

              {/* Grid column */}

              {/* Grid column */}

              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>
                  Magura,Khulna,Bangladesh
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  shazid15-12929@diu.edu.bd
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-4 copyright">
          © 2021 Copyright SNS Company
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
