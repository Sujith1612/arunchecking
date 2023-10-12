import React, { useState } from "react";

export default function Menu() {
  const [data, setData] = useState([
    { id: 1, name: "sujith", course: "front end" },
    { id: 2, name: "x", course: "backend" },
    { id: 3, name: "y", course: "backend" },
    { id: 4, name: "z", course: "fullstock" },
    { id: 5, name: "N", course: "front end" },
    { id: 6, name: "A", course: "fullstock" },
    { id: 7, name: "ddj", course: "database" },
  ]);
  const [datarender, setDtatarender] = useState(data);
  const courses = data.map((da) => da.course);
  const uniqueCourses = [...new Set(courses)];
  uniqueCourses.unshift("All");

  const handletap = (coursename) => {
    if (coursename === "All") {
      setDtatarender(data);
    } else {
      const filldata = data.filter((data) => data.course === coursename);
      setDtatarender(filldata);
    }
  };

  return (
    <div>
      {uniqueCourses.map((da, i) => (
        <span onClick={() => handletap(da)} className="tap" key={i}>
          {da}
        </span>
      ))}
      {datarender.map((da, i) => (
        <h1 key={i}>
          {da.name} - {da.course}
        </h1>
      ))}
    </div>
  );
}
