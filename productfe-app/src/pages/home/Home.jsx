/* eslint-disable no-unused-vars */
import { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Table />
      </>
    );
  }
}
