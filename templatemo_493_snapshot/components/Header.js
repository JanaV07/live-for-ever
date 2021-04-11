import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
        <a href="#top" className="navbar-brand smoothScroll">
          Snapshot
        </a>
      </div>
    );
  }
}

export default Header;
