import React from 'react';
import m from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getAutData, Logout} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAutData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {state: state.auth}
}
export default connect(mapStateToProps, {getAutData, Logout})(HeaderContainer)