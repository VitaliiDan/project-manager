import React, {useContext} from "react";
import FirstPage from "./FirstPage";
import {AppContext} from "../context/appContext";

const ContentWrapper = () => {
    const {state} = useContext(AppContext);

    let draw;

    switch (state.page) {
        case 1 :
            draw = <FirstPage/>;
            break;
        default: draw = null
    }

    return (
        <div className='contentWrapper'>
            {draw}
        </div>
    )
}

export default ContentWrapper;