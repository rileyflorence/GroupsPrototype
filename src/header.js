import React, { Component } from "react";
import headerImage from "./assets/header@2x.png";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #c1c1c1"
        }}
      >
        <img src={headerImage} alt="Logo" />
      </div>
    );
  }
}

export default Header;
