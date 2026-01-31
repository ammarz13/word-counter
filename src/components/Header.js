import React from "react";
import { Link } from "react-router-dom";

function Header(props) {

    
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li> */}
            </ul>
            {/* <div className="d-flex gap-2 badge-width">
            <span className="badge text-bg-primary" onClick={() => props.themeColor('#0d6efd')}></span>
            <span className="badge text-bg-secondary" onClick={() => props.themeColor('#6c757d')}></span>
            <span className="badge text-bg-success" onClick={() => props.themeColor('#198754')}></span>
            <span className="badge text-bg-danger" onClick={() => props.themeColor('#dc3545')}></span>
            <span className="badge text-bg-warning" onClick={() => props.themeColor('#ffc107')}></span>
            <span className="badge text-bg-info" onClick={() => props.themeColor('#0dcaf0')}></span>
            <span className="badge text-bg-dark" onClick={() => props.themeColor('#000000')}></span>
            </div> */}
            <div
              className={`form-check ms-3 form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckChecked"
                onClick={props.toogleMode}
              />
              <label>
                {props.mode?.charAt(0).toUpperCase() + props.mode?.slice(1)}{" "}
                Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
