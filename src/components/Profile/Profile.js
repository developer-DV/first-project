import React from 'react';
import ProfileCss from './Profile.module.css';
import PersonalData from './PersonalData/PersonalData';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <div className={ProfileCss.content}>
      <PersonalData profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
      <PostsContainer/>
    </div>
  );
}

export default Profile;