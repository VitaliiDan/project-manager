import React, {useContext} from "react";
import homeIco from '../assets/home-circle.png';
import {AppContext} from "../context/appContext";

const Header = () => {
    const {state} = useContext(AppContext)
    return (
        <div className='headerWrapper'>
            <div className='headerWrapper_leftSide'>
                <img src={homeIco} alt="home-button"/>
            </div>
            <div className='headerWrapper_rightSide'>
                {state.teamLider.login && state.page >= 1 && state.payload <= 3
                    ?
                    <>
                        <span>TEAMLIDER:</span>
                        <span>{state.teamLider.login}</span>
                        <img src={state.teamLider.avatar} alt=""/>
                    </>
                    :
                    null
                }
                {
                    state.page === 4
                        ?
                        <span
                            style={{fontWeight: 700}}
                        >
                            PODSUMOWANIE
                        </span>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default Header;