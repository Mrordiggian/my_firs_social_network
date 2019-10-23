import React from 'react'
import {Paginator} from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({countOnPage, currentPage, onChangedPage, totalCountPage, ...props}) => {
    return <div>

        {props.state.map(u => <User user={u}
                                    inProgress={props.inProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>)}
        <Paginator countOnPage={countOnPage}
                   currentPage={currentPage}
                   onChangedPage={onChangedPage}
                   totalCountPage={totalCountPage}
                   portionSize = "5"
        />
    </div>

}
export default Users