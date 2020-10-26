import React from 'react';
import DialogsCss from './../dialogs.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const AddMessage = (props) => {

    let addMewMessage = (values) => {
        debugger
        props.addNewMessage(values.mewMessageText)
    }

    return (
            <AddMessageFormRedux onSubmit={addMewMessage}/>
    )
}

const maxLength30 = maxLength(30)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={DialogsCss.addMessage}>
            <Field component={Textarea} name="mewMessageText" placeholder="Enter your message" validate={[required, maxLength30]}></Field>
            <button>Отправить</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessage