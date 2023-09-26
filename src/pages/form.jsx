import React, { Component } from "react";
import "../App.css"
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    age: "",
    city: "",
    onsubmit: false,
    pass: "",
    confirmpass: ""

  }
  // handlefirstname = (e) => {
  //   this.setState({ firstname: e.target.value })
  // }
  // handlelastname = (event) => {
  //   this.setState({ lastname: event.target.value })
  // }
  // handleage = (event) => {
  //   this.setState({ age: event.target.value })
  // }
  // handlecity = (event) => {
  //   this.setState({ city: event.target.value })

  // }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }
  handlesubmit = () => {
    if (this.state.firstname, this.state.age == "") {
      alert("firstname is required")
    }
    if (this.state.pass != "" && this.state.pass == this.state.confirmpass) {
      this.setState({ onsubmit: true })
    } else {
      alert("password does not match")
    }
  }

  render() {
    return (
      <div>
        <h1>register form</h1>
        <h2>

          <input type="text"
            name="firstname"
            className="mb-3"
            value={this.state.firstname}
            onChange={this.handlechange}
            placeholder="enter name"></input>
          <br />
          <input type="text"
            name="lastname"
            className="mb-3"
            value={this.state.lastname}
            onChange={this.handlechange}
            placeholder="enter last name" ></input>
          <br />

          <input type="number"
            name="age" className="mb-3"
            value={this.state.age}
            onChange={this.handlechange}
            placeholder="enter age" />
          <br />

          <input type="text"
            name="city" className="mb-3"
            value={this.state.city}
            onChange={this.handlechange}
            placeholder="enter city"
          />
          <br />
          <input
            type="password"
            className="mb-3"
            name="pass"
            value={this.state.pass}
            onChange={this.handlechange}
            placeholder="password"
          />
          <br></br>
          <input
            type="password"
            className="mb-3"
            name="confirmpass"
            value={this.state.confirmpass}
            onChange={this.handlechange}
            placeholder="confirmpassword"
          />



          <br></br>
        </h2>
        <button className="btn btn-primary" onClick={this.handlesubmit}>click Me!!!</button>


        <br></br>
        {this.state.onsubmit && (
          <div>
            <h1>Name : {this.state.firstname}{this.state.lastname}</h1>
            <h1>Agee:{this.state.age}</h1>
            <h1>City:{this.state.city}</h1>

          </div>
        )
        }

      </div>
    )
  };
}
export default Form;



