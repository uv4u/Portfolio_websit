import { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Projects from "./Projects";
import "./styles.css";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  function SetALlFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetALlFalse();
    function1(state1);
  }

  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            Utsav{" "}
          </span>
          <div className="bars" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name"></span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me{" "}
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume{" "}
          </a>
          <a
            href="#testimonial"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial{" "}
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me{" "}
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="bars" onClick={() => setopennav(!opennav)}>
          {" "}
        </div>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I am <span className="name-Im-text"> Utsav Kumar</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Developer
              </span>
              <span className="Im-text-subheading">
                Skilled in Problem solving and creating apps as solutions
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire Me{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1eOFm2VKjHnJj26VKdC16yccG0FQr2sM9/view?usp=sharing"
                  className="btn-resume-me"
                  target="_blank"
                >
                  Get Resume{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dbzvfk0kp/image/upload/v1655192261/WhatsApp_Image_2022-06-14_at_1.06.24_PM_yzpgjx.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About me
          </span>
          <span className="why-me-text"> Why choose me? </span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets8.lottiefiles.com/packages/lf20_k86wxpgr.json"
                background="transparent"
                speed="1"
                style={{ height: "300px" }}
                loop
                // controls
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full stack Web Developer with proficient knowledge in
                <br /> Python and Django Development and highly skilled in
                <br />
                Data Structures and Algorithms.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>C++ Programming</li>
                    <li>Python, Django, Flask</li>
                    <li>ReactJS Web Development</li>
                    <li>Javascript, MySQL, Bootstrap</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-me-text"> My formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg--4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fa-solid fa-user-graduate"></i>
              </span>
              <span class="icons-span">
                <i class="fa-solid fa-briefcase"></i>
              </span>
              <span class="icons-span">
                <i class="fa-solid fa-code"></i>
              </span>
              <span class="icons-span">
                <i class="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                {" "}
                Education{" "}
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                {" "}
                Work{" "}
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                {" "}
                Programming{" "}
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                {" "}
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg--8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div className="testimonials-part my-5" id="testimonial">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-me-text mb-5">
            What my clients say about me{" "}
          </span>
          <Testimonials />
        </div>
      </div>
      <div className="contact-me-part bg-new" id="contactme">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text "> Contact me</span>
          <span className="why-me-text mb-5">Lets keep in touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
