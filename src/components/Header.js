import React, {useContext} from "react";
import homeIco from '../assets/home-circle.png';
import {AppContext} from "../context/appContext";

const Header = () => {
    const {state, clearState} = useContext(AppContext)
    return (
        <div className='header'>
            <div className='headerWrapper container'>
                <div className='headerWrapper_leftSide'>
                    <img
                        onClick={clearState}
                        src={homeIco}
                        alt="home-button"
                    />
                </div>
                <div className='headerWrapper_rightSide'>
                    {
                        (state.teamLider.login) && (state.page > 1) && (state.page <= 3)
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
                            <span style={{fontWeight: 700}}> PODSUMOWANIE </span>
                            :
                            null
                    }
                </div>
            </div>
        </div>

    )
}

export default Header;