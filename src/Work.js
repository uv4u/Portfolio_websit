import React from "react";
import "./work.css";

export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-around">
            <span className="company-name"> Indian Railways</span>
            <span className="year-passedout">June 2021 - July 2021</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position"> Industrial Trainee</span>
          <span className="description-position">
            <ul>
              <li>
                Underwent the complete Technical Training under Signal and
                Telecom Department
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-around">
            <span className="company-name">Lernov</span>
            <span className="year-passedout">Sep 2021 - Oct 2021</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Content Writer</span>
          <span className="description-position">
            <ul>
              <li>
                Wrote about the courses and training programs Lernov intended to
                provide to their students.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
