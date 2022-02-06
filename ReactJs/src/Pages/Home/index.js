import React, { Component } from "react";
import "./Home.css";
import { NavigateToNewPage } from "../../Navigation";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home page</h1>
        <form>
          <button onClick={() => { NavigateToNewPage('/Counter') }}>Click button to view products</button>
        </form>
      </div>
    );
  }
}