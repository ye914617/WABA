import React from "react";

const PcLoginPage = () => {
  return (
    <div className="pc-page-container">
      <div className="logo-container">
        <img
          alt="logo"
          className="logo"
          src={require("../images/img_logo.png")}
        />
        <button className="signin-btn">SIGN IN</button>
      </div>
      <div className="form-container">
        <h1 className="title">Create Account</h1>
        <div className="socialmedia">
          <img
            className="socialmedia-logo"
            alt="fb-logo"
            src={require("../images/img_fb.png")}
          />
          <img
            className="socialmedia-logo"
            alt="line-logo"
            src={require("../images/img_line.png")}
          />
          <img
            className="socialmedia-logo"
            alt="google-logo"
            src={require("../images/img_google.png")}
          />
        </div>
        <p className="remind">or use your email for registration:</p>

        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            className="inputs input-person"
          />
          <input
            type="text"
            placeholder="Email"
            className="inputs input-mail"
          />
          <input
            type="text"
            placeholder="Password"
            className="inputs input-lock"
          />
          <select className="dropdown">
            <option value="" disabled selected hidden>
              Where are you from?
            </option>
            <option className="dropdown-list">Choose...</option>
            <option className="dropdown-list">Taiwan</option>
            <option className="dropdown-list">Australia</option>
          </select>
        </div>

        <div className="checkbox-container">
          <label className="label-container">
            <input type="checkbox" />
            <span className="not-robot">I am not a robot</span>
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="btn-container">
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default PcLoginPage;
