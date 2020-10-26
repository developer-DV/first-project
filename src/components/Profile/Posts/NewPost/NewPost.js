import React from 'react';
import NewPostCss from './NewPost.module.css';

const NewPost = (props) => {

  let newPostElement = React.createRef()

  let onaddPost = () => {
    props.addPost()
  }

  let onChangePost = () => { 
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  

  return (
    <div className={NewPostCss.newPost}>
      <h3 className={NewPostCss.heading}>New Post</h3>
      <textarea ref={newPostElement} placeholder="Add text..." value={props.newPostText} onChange={onChangePost}></textarea>
      <button onClick={onaddPost}>ADD</button>
    </div>
  );
}

export default NewPost;