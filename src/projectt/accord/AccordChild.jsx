import React, { Component } from "react";

export default class AccordChild extends Component {
  state = {
    infohide: false,
  }
  handlepop =()=>{
    this.setState({infohide : ! this.state.infohide})
  }
  render() {
    return (
      <div className="main">
        <div className="content">
           <br></br>
        {/* <div className="box"> */}
        <h2>{this.props.tittle}</h2>
        <button className="btn btn-primary" onClick={this.handlepop}>{this.state.infohide?"-":"+"}</button>
        {/* </div> */}
        {this.state.infohide &&
            <p>{this.props.info}</p>}
            </div>
      </div>
    );
  }
}
