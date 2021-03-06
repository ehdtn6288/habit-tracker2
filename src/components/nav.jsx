import React, { PureComponent } from "react";

class Nav extends PureComponent {
  render() {
    console.log("navBar");
    return (
      <header className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.count}</span>
      </header>
    );
  }
}

export default Nav;
