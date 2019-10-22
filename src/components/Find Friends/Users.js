import React from 'react'
import {Paginator} from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({countOnPage, currentPage, onChangedPage, totalCountPage, ...props}) => {
    return <div>Find Friends
        <Paginator countOnPage={countOnPage}
                   currentPage={currentPage}
                   onChangedPage={onChangedPage}
                   totalCountPage={totalCountPage}/>
        {props.state.map(u => <User user={u}
                                    inProgress={props.inProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>)}
    </div>

}
export default Users