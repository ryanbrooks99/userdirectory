import React from "react";
import "../styles/Header.css";


const styles = {
  headerStyle: {
    background: "red"
  },
  headingStyle: {
    fontSize: 100
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
    </header>
  );
}

export default Header;
