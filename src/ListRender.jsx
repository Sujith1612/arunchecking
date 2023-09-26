import React, { Component } from "react";
import img from "./New folder/nav img.jpg";
export class ListRender extends Component {
  state = {
    fruits: ["apple", "orange", "grap", "silver"],
    bio: [
      {
        name: "sujith",
        age: 23,
        role: "developer",
        image: { img },

      },
      {
        name: "arun",
        age: 23,
        role: "devalloper",
        image: { img },

      },
      {
        name: "siva",
        age: 22,
        role: "tester",
        image: { img },
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>hiu</h1>
        {this.state.fruits.map((fruit, i) => (
          <h2>
            {i + 1}.{fruit}
          </h2>
        ))}
        ;
        {this.state.bio.map((da, i) => (
          <div>
            <h1>
              {" "}
              {i + 1}. name: {da.name}
            </h1>
            <img src={da.image } alt="" />
            <h2>age:{da.age}</h2>
            <h2>role:{da.role}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default ListRender;
