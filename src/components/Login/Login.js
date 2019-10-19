import React from 'react'
import style from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {sendLoginData} from "../../Redux/authReducer";
import {Input} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../common/Validators/Validators";
import {Redirect} from "react-router-dom";


let maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>email</div>
        <div>
            <Field validate={[required, maxLength30]} name='email' type="text" placeholder={'email'} component={Input}/>
        </div>
        <div>Password</div>
        <div>
            <Field validate={[required, maxLength30]} name='password' type="password" placeholder={'password'} component={Input}/>
        </div>
        <div>
            <Field  name='rememberMe' type="checkbox" component={Input} />remember me
        </div>
        <div>
            <button>Login</button>
        </div >
        {props.error && <div className={style.error}>  {props.error} </div>}
    </form>
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const LoginContainer = (props) => {
    const onSubmit = (dataForm) => {
        props.sendLoginData(dataForm)
    }

    if(props.isAuth)  return <Redirect to={`/profile/${props.id}`}/>
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
        </div>

}
const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuthData,
    id: state.auth.id
})
export default connect(mapStatetoProps, {sendLoginData}) (LoginContainer)