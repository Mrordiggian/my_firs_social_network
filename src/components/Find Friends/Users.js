import React from 'react'

import User from "./User";


let Users = ({countOnPage, currentPage, totalCountPage, ...props}) => {
    return <div>
        {props.state.map(u => <User user={u}
                                    key={u.id}
                                    inProgress={props.inProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>)}
        {/*<div className={m.paginator}>*/}
        {/*    <Paginator countOnPage={countOnPage}*/}
        {/*              currentPage={currentPage}*/}
        {/*              onChangedPage={onChangedPage}*/}
        {/*              totalCountPage={totalCountPage}*/}
        {/*              portionSize="5"*/}
        {/*/></div>*/}
    </div>

}
export default Users