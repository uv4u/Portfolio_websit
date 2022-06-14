import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flew-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              National Institute of Technology, Hamirpur{" "}
            </span>
            {""}
            <span className="university-degree">
              Bachelors of Technology in Electonics and Communication{" "}
            </span>
          </div>{" "}
          {""}
          <div>
            <span className="year-passedout"> 2019-2023 </span>
          </div>
        </div>

        <div className="education-one my-4 justify-content-between d-flex flew-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              DAV Centenary Public School, Meerut{" "}
            </span>
            {""}
            <span className="university-degree">Intermediate </span>
          </div>{" "}
          {""}
          <div>
            <span className="year-passedout"> 2017-2018 </span>
          </div>
        </div>

        <div className="education-one my-4 justify-content-between d-flex flew-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              DAV Centenary Public School, Meerut{" "}
            </span>
            {""}
            <span className="university-degree">High School </span>
          </div>{" "}
          {""}
          <div>
            <span className="year-passedout"> 2015-2016 </span>
          </div>
        </div>
      </div>
    </>
  );
}
