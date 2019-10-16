import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const newComponent = (props) => {
        if (!props.isAuthData) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let mapStateToProps = (state) => {
        return {isAuthData: state.auth.isAuthData}
    }

    return connect(mapStateToProps) (newComponent)
}