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

            <div
                className='summeryPageWrapper_contentWrapper container'
                style={{margin: '0'}}
            >
                <div className='summeryPageWrapper_leftSide'>
                    <div className='summeryPageWrapper_teamLiderInfo'>
                        <img src={state.teamLider.avatar} alt=""/>
                        <div className='summeryPageWrapper_nameWrapper'>
                            <h1>TEAMLEADER:</h1>
                            <p>{state.teamLider.login}</p>
                        </div>
                    </div>
                    <div className='summeryPageWrapper_projectInfo'>
                        <h1>NAZWA PROJEKTU:</h1>
                        <div className='summeryPageWrapper_blueLine'></div>
                        <h1>{state.project.name}</h1>
                    </div>

                    <div className='summeryPageWrapper_orgInfo'>
                        <h1>ORGANIZACJA:</h1>
                        <div className='summeryPageWrapper_blueLine'></div>
                        <h1>{state.projectOrg.login}</h1>
                    </div>
                </div>

                <div className='summeryPageWrapper_rightSide'>
                    <h1 className='summeryPageWrapper_followersInfo'>
                        UŻYTKOWNICY:
                    </h1>
                    {
                        state.projectFollowers
                            ?
                            <ul className='summeryPageWrapper_followersWrapper'>
                                {state.projectFollowers.map((el, index) =>
                                    <li key={el.id} >
                                        <span>{index+1}.</span>
                                        <img src={el.avatar} alt="avatar"/>
                                        <span>{el.login}</span>
                                    </li>
                                )
                                }
                            </ul>
                            :
                            null
                    }
                </div>
            </div>

            <div className='summeryPageWrapper_fakeNavigateButtons'></div>

        </div>
    )
}

export default SummeryPage;