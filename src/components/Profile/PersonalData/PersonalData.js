import React, { useState } from 'react';
import PersonalDataCss from "./PersonalData.module.css"
import Preloader from '../../common/Preloader/Preloader';
import StatusWithHooks from './StatusWithHooks'
import UserPhoto from '../../../assets/images/UserPhoto.png'
import ProfileDataForm from './ProfileDataForm';

const Contact = ({ contacTitle, contactValue }) => {
  return (<p className={PersonalDataCss.contact}>{contacTitle}: {contactValue}</p>)
}

const ProfileData = (props) => {
  return (
    <div className={PersonalDataCss.description}>
      <p className={PersonalDataCss.fullname}>{props.profile.fullName ? props.profile.fullName : 'Vlad Drachev'}</p>
      <StatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <p><b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"} </p>
      {
        props.profile.lookingForAJob && <p>My professional skills: {props.profile.lookingForAJobDescription}</p>
      }
      <p><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => (<Contact key={key} contacTitle={key} contactValue={props.profile.contacts[key]}></Contact>))}</p>
      <p>{props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}</p>
    </div>
  )
}

const PersonalData = (props) => {

  const [editMode, setEditMode] = useState(false)

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const submit = values => {
    debugger
    props.saveProfile(values).then( () => setEditMode(false))
    debugger
  }

  if (!props.profile) {
    return <Preloader />
  }

  /*src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"*/
  return (
    <div className={PersonalDataCss.person_data}>
      <div>
        <img className={PersonalDataCss.account_img} src={props.profile.photos.large || UserPhoto} />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      </div>
      {editMode
        ? <ProfileDataForm onSubmit={submit} initialValues={props.profile} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        : <ProfileData profile={props.profile} goToEditMode={() => setEditMode(true)} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />}
    </div>
  );
}

export default PersonalData;