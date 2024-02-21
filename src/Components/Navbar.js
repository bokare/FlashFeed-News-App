import React, { Component } from "react";
import { Link } from "react-router-dom";   

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-dark navbar-expand-lg  bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              FlashFeed
            </Link>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/business">
                  business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/entertainment">
                  entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/health">
                  health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/science">
                  science
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                  sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                  technology
                  </Link>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
