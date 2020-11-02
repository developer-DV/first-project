import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import PersonalDataCss from "./PersonalData.module.css"
import StatusWithHooks from './StatusWithHooks'
import style from '../../common/FormsControls/formsControls.module.css'

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p><b>Full name: </b><Field name="fullName" placeholder="Full name" type="text" component={Input}></Field></p>

            <StatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            <p><b>Looking for a job: </b><Field name="lookingForAJob" type="checkbox" component={Input}></Field></p>
            <p><b>My professional skills: </b> <Field name="lookingForAJobDescription" type="text" component={Textarea}></Field></p>
            <p><b>About me: </b> <Field name="aboutMe" type="text" component={Textarea}></Field></p>
            <p><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => (
                <div key={key} className={PersonalDataCss.contact}>{key}: <Field placeholder={key} name={"contacts." + key} type="text" component={Input}></Field></div>
            ))}</p>
            { props.error && <div className={style.formSummaryError}>{props.error} </div>}
            <p>{!props.isOwner && <button>Save</button>}</p>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm