import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import style from '../common/FormsControls/formsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div style={{position: "relative"}}><Field name="email" placeholder="Email" type="text" component={Input} validate={required}></Field></div>
            <div style={{position: "relative"}}><Field name="password" placeholder="Password" type="password" component={Input} validate={required}></Field></div>
            <div style={{position: "relative"}}><Field name="rememberMe" component="input" type="checkbox"></Field>Remember me</div>
            { error && <div className={style.formSummaryError}>{error} </div>}
            <div><button>Login</button></div>
        </form>
    ) 
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm