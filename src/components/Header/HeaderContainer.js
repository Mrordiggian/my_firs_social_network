import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, Logout} from "../../Redux/authReducer";
import {selectAuthState} from "../../Redux/AuthSelector";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {state: selectAuthState(state)}
}
export default connect(mapStateToProps, {getAuthData, Logout})(HeaderContainer)