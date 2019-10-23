import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from './Redux/appReducer'
import Preloader from "./common/Preloader/Preloader";
import {withSuspense} from "./HOC/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const MessageContainer = React.lazy(() => import('./components/Message/MessageContainer'))
const FindsFriendsContainer = React.lazy(() => import("./components/Find Friends/FindFriendsContainer"))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div>
                    <Route path='/profile/:userID?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/message' render={withSuspense(MessageContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/findfriends' render={withSuspense(FindsFriendsContainer)}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default withRouter(connect(mapStateToProps, {initializeApp})(App));
