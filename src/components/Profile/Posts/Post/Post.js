import React from 'react';
import PostCss from './Post.module.css';

const Post = (props) => {
  return (
    <div className={PostCss.post}>
      <img className={PostCss.imgPost} src="https://s1.iconbird.com/ico/2014/1/588/w512h5121390727886addlist512.png" />
      <p className={PostCss.textPost}>{props.message}</p>
    </div>
  );
}

export default Post;