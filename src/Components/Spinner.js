import React, { Component } from 'react'
import '../App.css';

export default class Spinner extends Component {
  render() {
    return (
      <>
      <div className="cont">
        <div className="div2 loader"></div>
        <div className="div3 loader"></div>
        <div className="div4 loader"></div>
        <div className="div5 loader"></div>
        <div className="div6 loader"></div>
    </div>
      </>
    )
  }
}
