import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import LoginForm from './LoginForm'

const Login = (props) => {

    const submit = values =>{
        props.login(values.email, values.password, values.rememberMe, values.captcha)
    }

    if(props.isAuth){
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={submit} captchaUrl={props.captchaUrl}/>
    </div>
}

let mapStateToProps = (state) =>{
    return({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, {login})(Login)