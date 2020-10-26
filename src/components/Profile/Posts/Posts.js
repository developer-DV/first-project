import React from 'react';
import PostsCss from './Posts.module.css';
import Post from "./Post/Post";
import NewPostContainer from './NewPost/NewPostContainer';

const Posts = (props) => {
  console.log("render")
  console.log(props)
  return (
    <div>
      <NewPostContainer/>
      <div className={PostsCss.myPosts}>
        <h2 className={PostsCss.heading}> My Posts</h2>
         {props.posts.map( p => <Post key={p.id} message={p.message}></Post>)}
      </div>
    </div>
  );
}

export default Posts;