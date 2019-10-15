import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import MessageContainer from "./components/Message/MessageContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import FindsFriendsContainer from "./components/Find Friends/FindFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <NavBarContainer />
                <div>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer />}/>
                    <Route path='/message' render={() => <MessageContainer  />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/findfriends' render={() => <FindsFriendsContainer/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>

            </div>
    );
}


export default App;
