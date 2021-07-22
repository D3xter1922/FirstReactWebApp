import React from "react";
import { Post } from "./Post";
export const PostFeed = (props) => {

  // var posts = props.posts;
  // const changeBtnText = (id) => {
  //   posts = props.posts.filter((data) => {
  //     return data.id!==id;
  //   })
  // }
  
  return (
    <div className = "mt-3">
      {props.Posts.map((pasta) => (
        <div className="" key={pasta.id}>
          <Post Post={pasta} useFetchh={() => props.useFetchh()}  setData = {(d) => props.setData(d)} setDelete = {(d) => props.setDelete(d)}/>
        </div>
      ))}
    </div>
  );
};
