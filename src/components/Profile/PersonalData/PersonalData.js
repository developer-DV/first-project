import React from 'react';
import PersonalDataCss from "./PersonalData.module.css"
import Preloader from '../../common/Preloader/Preloader';
import StatusWithHooks from './StatusWithHooks'
import UserPhoto from '../../../assets/images/UserPhoto.png'

const PersonalData = (props) => {

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />
  }

  /*src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"*/
  return (
    <div className={PersonalDataCss.person_data}>
      <div>
        <img className={PersonalDataCss.account_img} src={props.profile.photos.large || UserPhoto} />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
      </div>
      <div className={PersonalDataCss.description}>
        <p className={PersonalDataCss.fullname}>{props.profile.fullName ? props.profile.fullName : 'Vlad Drachev'}</p>
        <StatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>Date of birth: 28 July</p>
        <p>Education: DSTU</p>
        <p>City: Kiev</p>
        <p>Country: Ukraine</p>
      </div>
    </div>
  );
}

export default PersonalData;