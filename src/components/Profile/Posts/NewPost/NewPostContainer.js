import React from 'react';
import { onChangePostActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(onChangePostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;