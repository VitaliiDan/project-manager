import React, {useContext, useState} from "react";
import turnBackIco from "../assets/turnBack-enable.png";
import turnForwardEnIco from "../assets/turnForward-enable.png";
import turnForwardDisIco from "../assets/turnForward-disable.png";
import {AppContext} from "../context/appContext";
import OrgSet from "./OrgSet";

const ThirdPage = () => {

    const {
        state,
        pageIncrement,
        pageDecrement,
        clearProjectOrg,
        setProjectFollowers
    } = useContext(AppContext);

    const [checkedFollowers, setCheckedFollowers] = useState(state.followers.map(el => {
        return {
            login: el.login,
            id: el.id,
            avatar: el.avatar,
            checked: false
        }
    }));

    const checkHandler = (checkedEl) => {
        const tempArray = checkedFollowers.map(el => {
            return el.id === checkedEl.id ? {...el, checked: !el.checked} : {...el}
        })
        setCheckedFollowers([...tempArray]);
    }

    return (
        <div className='thirdPageWrapper'>
            <img
                className='thirdPageWrapper_navigationButton'
                src={turnBackIco}
                alt=""
                onClick={() => {
                    pageDecrement();
                    clearProjectOrg();
                }}
            />
            <div
                className='thirdPageWrapper_contentWrapper container'
                style={{margin: '0'}}
            >
                <div className='thirdPageWrapper_orgWrapper'>
                    <div className='orgWrapper_typography'>
                        <h1>ORGANIZACJE:</h1>
                    </div>
                    <OrgSet />
                </div>


                <div className='thirdPageWrapper_followersWrapper'>
                    <div className='followersWrapper_typography'>
                        <h1>UŻYTKOWNICY:</h1>
                    </div>
                    <div className='followersWrapper_labelWrapper'>
                        {
                            state.followers
                                ?
                                state.followers.map((el, index) =>
                                    <label
                                        className='followersWrapper_label'
                                        key={el.id}
                                    >
                                        <p>
                                            <span>{index + 1}.</span>
                                            <img src={el.avatar} alt=""/>
                                            <span>{el.login.length <= 15 ? el.login : `${el.login.slice(0, 11)}...`}</span>
                                        </p>

                                        <input
                                            className='followersWrapper_checkbox'
                                            type="checkbox"
                                            value={el.name}
                                            onChange={() => checkHandler(el)}
                                        />
                                    </label>
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>


            {state.projectOrg
                ?
                <img
                    className='thirdPageWrapper_navigationButton'
                    src={turnForwardEnIco}
                    onClick={() => {
                        pageIncrement();
                        setProjectFollowers(checkedFollowers);
                    }}
                    alt=""
                />
                :
                <img
                    className='thirdPageWrapper_navigationButton'
                    src={turnForwardDisIco}
                    alt=""
                />
            }
        </div>
    )
}

export default ThirdPage;