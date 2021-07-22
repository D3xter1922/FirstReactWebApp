import React from "react";
import { useState } from "react";

import "../App.css";
import { useHistory } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import usernamess from "./Usernames";
const AddPost = (props) => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [btnText, setBtnText] = useState("Post");
  const tempfun = (e) => {
    console.log("this works", e);
    setTitle(e.title);
    setContent(e.content);
    setBtnText("edit");
  };

  const PostContent = (e) => {
    const toastID = toast.loading("loading...");
    e.preventDefault();

    setUsername(usernamess[Math.floor(Math.random() * usernamess.length)]);
    
    console.log(username);
    var pasta = { title, content, username };

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pasta),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Posted");
        } else {
          toast.error("failed");
        }
        console.log("posted");
        props.useFetchh();
        setTitle("");
        setContent("");
        setBtnText("Post");
        toast.dismiss(toastID);
      })
      .catch((error) => {
        toast.dismiss(toastID);
        toast.error("failed to post");
        console.error(error);
      });
  };
  props.changeData(tempfun);
  // const { data, isPending, error } = useFetch("http://localhost:8000/posts");
  // props.Post(data);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="container input-form">
        <form onSubmit={PostContent}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="exampleFormControlInput1"
              required
              placeholder=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              required
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <button type="button " className="btn btn-outline-primary">
            {btnText}
          </button>
        </form>
      </div>
    </>
  );
};

export { AddPost };
