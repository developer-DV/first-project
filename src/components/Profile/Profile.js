import React from 'react';
import ProfileCss from './Profile.module.css';
import PersonalData from './PersonalData/PersonalData';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <div className={ProfileCss.content}>
      <PersonalData profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <PostsContainer/>
    </div>
  );
}

export default Profile;