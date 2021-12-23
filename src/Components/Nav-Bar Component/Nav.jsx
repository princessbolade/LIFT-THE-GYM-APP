import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <div className="nav-header-container">
            <h1 className="nav-header">LiFT.</h1>
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li className="nav-sub-link">
                Programs <img src="../../arrowdown.svg" alt="" />
                {/* <ul>
                <li>Test</li>
                <li>Test</li>
              </ul> */}
              </li>

              <li className="nav-sub-link">
                Guides <img src="../../arrowdown.svg" alt="" />
                {/* <ul>
                <li>Test</li>
                <li>Test</li>
              </ul> */}
              </li>
              <li className="nav-sub-link">About</li>
            </ul>
            <button className="nav-btn">Join</button>
          </div>
        </div>
      </div>
    </>
  );
};
