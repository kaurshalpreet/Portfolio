import React from "react";

function NavTabs() {
    const styleOne = {
        fontSize: 40,
        fontFamily: 'Merriweather + serif',
        backgroundColor: 'black'
    }
    return (

<header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary">
        <span
          className="navbar-brand mb-1 h1 p-2"
          style={styleOne}
          ><a href="/" className="nameLink">Shalpreet Kaur</a></span
        >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    );
}
export default NavTabs;