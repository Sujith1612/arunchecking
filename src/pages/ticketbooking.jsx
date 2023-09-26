import React, { Component } from "react";




class TicketBooking extends Component {
    state = {
        // moviename : "jailer",
        count : 0
    };
    handleincrement = () =>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
        <h1>moviename : {this.props.moviename}</h1>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.handleincrement}>Add Ticket</button>
        <button>Booking</button>
                <h1>Ticket Count</h1>
                </div>

        )
    }
}
export default TicketBooking
