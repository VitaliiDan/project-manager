import React, {useContext} from "react";
import turnBackIco from "../assets/turnBack-enable.png";
import {AppContext} from "../context/appContext";

const SummeryPage = () => {
    const {state, pageDecrement} = useContext(AppContext);
    return (
        <div className='summeryPageWrapper'>
            <img
                className='summeryPageWrapper_navigateButtons'
                src={turnBackIco}
                alt=""
                onClick={() => {
                    pageDecrement();
                }}
            />

            <div className='summeryPageWrapper_leftSide'>
                <div className='summeryPageWrapper_teamLiderInfo'>
                    <img src={state.teamLider.avatar} alt=""/>
                    <div className='summeryPageWrapper_nameWrapper'>
                        <h1>TEAMLEADER:</h1>
                        <p>{state.teamLider.login}</p>
                    </div>
                </div>
                <div className='summeryPageWrapper_projectInfo'>

                </div>
                <div className='summeryPageWrapper_orgInfo'>

                </div>
            </div>

            <div className='summeryPageWrapper_rightSide'>
                <div className='summeryPageWrapper_followersInfo'>

                </div>
            </div>

        </div>
    )
}

export default SummeryPage;