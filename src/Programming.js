import React from "react";
import "./programming.css";

export default function Programming() {
  const value = [
    {
      text: "C++",
      percentage: 80
    },
    {
      text: "Data Structures",
      percentage: 80
    },
    {
      text: "Algorithms",
      percentage: 80
    },
    {
      text: "Python",
      percentage: 50
    },
    {
      text: "Django",
      percentage: 60
    },
    {
      text: "ReactJS",
      percentage: 60
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
