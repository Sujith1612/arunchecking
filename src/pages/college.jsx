import React, { Component } from "react";

class College extends Component{
    render(){
        return(
            <div>
                <h1>
                    College:{this.props.name}
                </h1>
            </div>
        )
    }
}
export default College