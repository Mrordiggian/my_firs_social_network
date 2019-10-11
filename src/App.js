import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import MessageContainer from "./components/Message/MessageContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import FindsFriendsContainer from "./components/Find Friends/FindFriendsContainer";


const App = (props) => {
    return (
            <div className="App-wrapper">
                <Header/>
                <NavBarContainer />
                <div>
                    <Route path='/profile' render={() => <Profile />}/>
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
