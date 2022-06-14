import React from "react";
import "./testimonials.css";
export default function Testimonials() {
  const testimonials = [
    {
      text: "He's good at what he does. Keep it up."
    },
    {
      text: "Nice Job."
    },
    {
      text: "Good Work"
    }
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6">
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.text}</span>
                  <span className="stars"> ⭐⭐⭐⭐⭐ </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
