import React from 'react'
import style from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {sendLoginData} from "../../Redux/authReducer";
import {Input} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/Validators/Validators";
import {Redirect} from "react-router-dom";


let maxLength30 = maxLengthCreator(30)

const LoginForm = ({captchaUrl, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>email</div>
        <Field validate={[required, maxLength30]} name='email' type="text" placeholder={'email'} component={Input}/>
        <div>Password</div>
        <Field validate={[required, maxLength30]} name='password' type="password" placeholder={'password'}
               component={Input}/>
        <Field name='rememberMe' type="checkbox" component={Input}/>remember me
        <div>
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && <Field validate={[required, maxLength30]} name='captcha' type="text" placeholder={'Enter symbols from the picture'} component={Input}/>}
        </div>
        <div>
            <button>Login</button>
        </div>
        {error && <div className={style.error}>  {error} </div>}
    </form>
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const LoginContainer = (props) => {
    const onSubmit = (dataForm) => {
        props.sendLoginData(dataForm)
    }

    if (props.isAuth) return <Redirect to={`/profile/${props.id}`}/>
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthData,
    id: state.auth.id,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {sendLoginData})(LoginContainer)