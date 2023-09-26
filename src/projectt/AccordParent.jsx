import React, { Component } from "react";
import AccordChild from "./accord/AccordChild";

export default class AccordParent extends Component {
  state = {
    data: [
      {
        id: 1,
        tittle: "do i have to allow the use ",
        info: "Never, ever, ever, ever, ever give up on yourself",
      },
      {
        id: 2,
        tittle: "what is a cookie",
        info: "Cry and let your tears flow for a brighter tomorrow",
      },
      {
        id: 3,
        tittle: "how do you know ",
        info: "Take a shower, wash off the day.",
      },
      {
        id:4, tittle:"Success is survival",info:"There is no substitute for victory"
      }
    ],
  };
  render() {
    return (
      <div>
        {this.state.data.map((acc,i) => (
          <div>
            <AccordChild tittle={acc.tittle} info={acc.info}/>
          </div>
        ))}
      </div>
    );
  }
}
