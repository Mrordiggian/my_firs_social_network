import React from 'react';
import m from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../Redux/authReducer";
import {UserAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        UserAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }


}

const mapStateToProps = (state) => {
    return {state: state.auth}
}
export default connect(mapStateToProps, {setAuthData})(HeaderContainer)