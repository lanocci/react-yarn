import React from "react";
import ReactDOM from "react-dom";
import styles from "./css/app.css";

export default class App extends React.Component {
  render() {
    return(
      <h1 className="title">{"Hello World"}</h1>
    )
  }
}

  ReactDOM.render(
    <App />,
    document.getElementById("app")
  )
