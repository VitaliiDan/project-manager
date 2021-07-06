import React, {useContext} from "react";
import {AppContext} from "../context/appContext";

const UserCard = ({user}) => {
    const {setTeamLider, pageIncrement, fetchProjects, fetchFollowers, fetchOrgs} = useContext(AppContext)

    return (
        <div
            className='userCardWrapper'
            onClick={() => {
                setTeamLider(user);
                pageIncrement();
                fetchProjects(user);
                fetchFollowers(user);
                fetchOrgs(user);
            }}
        >
            {user
                ?
                <>
                    <img className='userCardWrapper_avatar' src={user.avatar} alt=""/>
                    <span>{user.login.length <= 20 ? user.login : `${user.login.slice(0, 16)}...`}</span>
                </>
                :
                null}
        </div>
    )
}

export default UserCard;