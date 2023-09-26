// import { Button } from "bootstrap";
import React, { Component } from "react";

export class Birthday extends Component {
  state = {
    birthdays: [
      {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      },
      {
        id: 2,
        name: "Hester Hogan",
        age: 32,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      },
      {
        id: 3,
        name: "Larry Little",
        age: 36,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      },
      {
        id: 4,
        name: "Sean Walsh",
        age: 34,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
      {
        id: 5,
        name: "Lola Gardner",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        pass: "",
        confirm: "",
        onSubmit: false,
      },
    ],
  };

  render() {
    return (
      <main>
        <section className="container">
          <h3>{this.state.birthdays.length} birthdays today</h3>
          {this.state.birthdays.map((da, i) => (
            <article key={i} className="content">
              <div>
                <img className="img" src={da.image} alt="#" />
              </div>

              {/* <h2>{da.name}</h2>
              <p>{da.age}</p>
              <br></br> */}

              <div>
                <h2>{da.name}</h2>
                <p>{da.age} years</p>
              </div>
              <div></div>
            </article>
          ))}
          <button className="btn btn-secondary" onClick={this.handleremove}>
            CLEAR ALL
          </button>
        </section>
      </main>
    );
  }
}
export default Birthday;
