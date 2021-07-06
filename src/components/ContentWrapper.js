import React, {useContext} from "react";
import FirstPage from "./FirstPage";
import {AppContext} from "../context/appContext";
import Header from "./Header";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import SummeryPage from "./SummeryPage";

const ContentWrapper = () => {
    const {state} = useContext(AppContext);

    let draw;

    switch (state.page) {
        case 1 :
            draw = <FirstPage/>;
            break;
        case 2:
            draw = <SecondPage/>;
            break;
        case 3:
            draw = <ThirdPage/>;
            break;
        case 4:
            draw = <SummeryPage/>;
            break;
        default:
            draw = null
    }

    return (
        <div className='contentWrapper'>
            <Header />
            {draw}
        </div>
    )
}

export default ContentWrapper;