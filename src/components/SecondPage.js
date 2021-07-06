import React, {useContext} from "react";
import turnBackIco from '../assets/turnBack-enable.png';
import turnForwardDisIco from '../assets/turnForward-disable.png';
import turnForwardEnIco from '../assets/turnForward-enable.png';
import {AppContext} from "../context/appContext";

const SecondPage = () => {
    const {
        state,
        pageIncrement,
        pageDecrement,
        clearTeamLeaderInfo,
        setProject,
        clearProjectInfo
    } = useContext(AppContext);

    return (
        <div className='secondPageWrapper'>
            <img
                src={turnBackIco}
                alt=""
                onClick={() => {
                    pageDecrement();
                    clearTeamLeaderInfo();
                    clearProjectInfo();
                }}
            />

            <div className='secondPageWrapper_content'>
                <div className='secondPageWrapper_typography'>
                    <h1>WYBIERZ PROJEKT <span> (wybierz jeden aby przejść dalej): </span></h1>
                </div>
                <div className='secondPageWrapper_projectsWrapper'>
                    {
                        state.projects
                            ?
                            state.projects.map((el, index) =>
                                <label key={el.id}>
                                    <p>
                                        <span>{index + 1}.</span>
                                        <span>{el.name.length <= 15 ? el.name : `${el.name.slice(0, 11)}...`}</span>
                                    </p>

                                    <input
                                        type="radio"
                                        value={el.name}
                                        checked={state.project.name === el.name}
                                        onChange={() => setProject(el)}
                                    />
                                </label>
                            )
                            :
                            null
                    }
                </div>
            </div>

            {state.project
                ?
                <img
                    src={turnForwardEnIco}
                    onClick={pageIncrement}
                    alt=""
                />
                :
                <img
                    src={turnForwardDisIco}
                    alt=""
                />
            }
        </div>
    )
}

export default SecondPage;