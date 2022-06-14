import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    var templateParams = {
      from_name: name + " " + email,
      to_name: "ukumar380@gmail.com",
      feedback: message
    };

    emailjs
      .send(
        "service_84aobz8",
        "template_hvht5mr",
        templateParams,
        "nBxuoxxZuR_Vdrn8Z"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    // emailjs
    //   .sendForm(
    //     "service_84aobz8",
    //     "template_hvht5mr",
    //     form.current,
    //     "nBxuoxxZuR_Vdrn8Z"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in Touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_gaplvsns.json"
                background="transparent"
                speed="1"
                style={{ width: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex flex-column card-contact-right"
            >
              <div className="input-group my-3 d-flex flex-column">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  className="input-groups"
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your email"
                  className="input-groups"
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <label>Mesage</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your message "
                  className="input-groups"
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
