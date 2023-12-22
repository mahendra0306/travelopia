import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://www.exodus.co.uk/">
            <img src="./exodus.png" width="112" height="28" alt="logo" />
          </a>

          <span
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <span class="navbar-item">Home</span>

            <span class="navbar-item">Documentation</span>

            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-link">More</span>

              <div class="navbar-dropdown">
                <span class="navbar-item">About</span>
                <span class="navbar-item">Jobs</span>
                <span class="navbar-item">Contact</span>
                <hr class="navbar-divider" />
                <span class="navbar-item">Report an issue</span>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <span class="button is-primary">
                  <strong>Sign up</strong>
                </span>
                <span class="button is-light">Log in</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
