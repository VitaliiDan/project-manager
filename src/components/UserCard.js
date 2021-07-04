import React from "react";

const UserCard = ({user}) => {

    return (
        <div className='userCardWrapper'>
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