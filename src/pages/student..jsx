import React, { Component } from "react";

class Student extends Component{
    render(){
        return(
            <div>
                <h1>
                    student:{this.props.name}
                </h1>
            </div>
        )
    }
}
export default Student