import React, {useContext, useState} from "react";
import triangleDown from '../assets/triangle_down.svg';
import triangleUp from '../assets/triangle_up.svg';
import {AppContext} from "../context/appContext";
import {validateOrgName} from "./helpFunc";

const OrgSet = () => {
    const {state, setProjectOrg} = useContext(AppContext);

    const [subMenuFlag, setSubMenuFlag] = useState(false);

    const toggleSubMenu = () => setSubMenuFlag(prevState => !prevState);

    let subMenu;

    if (subMenuFlag) {
        subMenu = (
            <div className='subMenu'>
                <div className='subMenu_orgInfo'>
                    <span>
                        {
                            state.projectOrg
                                ?
                                state.projectOrg.login
                                :
                                'Set Org'
                        }
                    </span>
                    <img
                        onClick={toggleSubMenu}
                        src={triangleUp}
                        alt="arrow up"
                    />
                </div>

                <div className='subMenu_orgTable'>
                    <ul>
                        {state.orgs.map((el, index) =>
                            <li
                                key={el.id}
                                onClick={() => {
                                    setProjectOrg(el);
                                    toggleSubMenu();
                                }}
                            >
                                <span>{index + 1}.</span>
                                <p>{validateOrgName(el.login)}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    } else {
        subMenu = (
            <div className='subMenu'>
                <div className='subMenu_orgInfo'>
                    <span>
                        {
                            state.projectOrg
                                ?
                                state.projectOrg.login
                                :
                                'Set Org'
                        }
                    </span>
                    <img
                        onClick={toggleSubMenu}
                        src={triangleDown}
                        alt="arrow down"
                    />
                </div>
            </div>
        )
    }

    return subMenu

}

export default OrgSet;