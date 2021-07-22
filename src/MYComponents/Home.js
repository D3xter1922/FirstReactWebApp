import React from "react";
import { useState, useEffect } from "react";
import { PostFeed } from "./PostFeed";
import useFetch from "./useFetch";
import { AddPost } from "./AddPost";
import toast, { Toaster } from "react-hot-toast";

export const Home = () => {
  const {
    fetchFunc,
    data: posts,

    error,
  } = useFetch("http://localhost:8000/posts");
  const [updated, setUpdated] = useState(false);
  var updateUI = () => {
    setUpdated(!updated);
  };
  useEffect(() => {
    fetchFunc();
    if (error !== null) {
      toast.error("error.message");
    }
  }, [updated]);
  var x;
  //fetchFunc();
  // const [Post, setPost] = useState(null);
  const changeData = (f) => {
    x = f;
  };
  const setData = (d) => {
    console.log(d);
    x(d);
  };
  const setDelete = (d) => {};
  console.log("post is ", posts);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div>
        <AddPost
          useFetchh={() => updateUI()}
          changeData={(f) => changeData(f)}
        />
      </div>
      <div>
        {posts && (
          <PostFeed
            Posts={posts}
            useFetchh={() => updateUI()}
            setData={(d) => setData(d)}
            setDelete={(d) => setDelete(d)}
          />
        )}
      </div>
    </>
  );
};
