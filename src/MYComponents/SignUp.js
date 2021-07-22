import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {Link, navlink} from "react-router-dom";

const SignUp = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const redStyle = {
    color: "#ff2e2e",
  };
  const greenStyle = {
    color: "#4BB543",
  };
  const [style, setStyle] = useState(null);
  const [style2, setStyle2] = useState(null);
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <Toaster />
      <div
        className=" card container pt-7 mt-7 flex pt-10 col-md-3 mb-4 h-md-250 shadow-0 bg-dark text-light"
        style={{ top: "10%" }}
      >
        <form
          className="child align-centre pt-7 mt-7 flex pt-10 mb-4 h-md-250 shadow-0 m-xl"
          onSubmit={() => {
            if (password.length < 8) {
              toast.error("Invalid username/password");
            } else {
              toast.success("logging in..");
            }
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              required
              type="name"
              className="form-control mb-2"
              id="exampleInputName"
              aria-describedby="NameHelp"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="exampleInputPhoneNo1" className="form-label">
              Contact Number
            </label>
            <input
              required
              type="name"
              className="form-control mb-2"
              id="exampleInputName"
              aria-describedby="NameHelp"
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required
              type={type}
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length >= 8) {
                  setMessage("looks good");
                  setStyle(greenStyle);
                } else {
                  setMessage("password must be atleast 8 characters long");
                  setStyle(redStyle);
                }
              }}
            />
            <div id="emailHelp" className="form-text" style={style}>
              {message}
            </div>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              required
              type={type}
              className="form-control"
              id="exampleInputPassword2"
              
              onChange={(e) => {
                
                if (e.target.value == password) {
                  setMessage2("");
                  setStyle2(greenStyle);
                } else {
                  setMessage2("passwords do not match");
                  setStyle2(redStyle);
                }
              }}
            />
            <div id="emailHelp" className="form-text" style2={style}>
              {message2}
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={() => {
                console.log(password);
                if (type === "password") {
                  setType("");
                } else {
                  setType("password");
                }
              }}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Show password
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
          <Link
            to="/"
            className="text-light"
            style={{ textDecoration: "none" }}
            
          >Submit</Link>
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
