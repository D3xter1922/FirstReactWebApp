import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const redStyle = {
    color: "#ff2e2e",
  };
  const greenStyle = {
    color: "#4BB543",
  };
  const [style, setStyle] = useState(null);
  
  return (
    <div className="" style={{ height: "100vh" }}>
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              id="SignInForm"
              required
              type="email"
              className="form-control"
              
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
          
          <Link
            to="/"
            className="text-light"
            style={{ textDecoration: "none" }}
            
          >
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
