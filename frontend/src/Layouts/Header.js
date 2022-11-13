import React from "react";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
              alt="logo de Wild School"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a
              className="navbar-item"
              href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance"
            >
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://github.com/YasmineRoque"
                >
                  About
                </a>
                <a
                  className="navbar-item"
                  href="https://github.com/YasmineRoque/TestTechniqueWS"
                >
                  The Test with React
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
