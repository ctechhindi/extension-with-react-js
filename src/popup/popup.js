import React from "react";
import ReactDOM from "react-dom";
import './popup.css';

class Welcome extends React.Component {
  render() {
    return <h1>Extension Popup Page</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));