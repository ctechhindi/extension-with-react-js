import React from "react";
import ReactDOM from "react-dom";
import './options.css';

class Welcome extends React.Component {
  render() {
    return <h1>Extension Options Page</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));