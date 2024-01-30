import React from "react";
import './navigation.css';

export const Navigation = (props) => {
  return (
    <nav>
      <div className="nav-content"> 
      <div className='nav-left'>
        {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button> */}
        <a href="/">
          NOVELLA
        </a>{" "}
      </div>

      <div className="nav-right">
        <ul>
          <li>
            <a href="/horses">
              HORSES
            </a>
          </li>
          <li>
            <a href="/owners">
              OWNERS
            </a>
          </li>
          <li>
            <a href="/locations">
              LOCATIONS
            </a>
          </li>
          <li>
            <a href="/add">
              ADD HORSE
            </a>
          </li>
        </ul>
      </div>
</div>
    </nav>
  );
};

export default Navigation;