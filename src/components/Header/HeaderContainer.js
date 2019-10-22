import React from 'react';
import m from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, Logout} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {state: state.auth}
}
export default connect(mapStateToProps, {getAuthData, Logout})(HeaderContainer)