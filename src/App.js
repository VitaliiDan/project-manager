import React, {useContext, useEffect} from "react";
import {AppContext} from "./context/appContext";
import LoaderWrapper from "./components/LoaderWrapper";
import ContentWrapper from "./components/ContentWrapper";

function App() {
    const {state, fetchUsers} = useContext(AppContext);

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="appWrapper">
            {
                state.loading
                    ?
                    <LoaderWrapper/>
                    :
                    <ContentWrapper/>
            }
        </div>
    )
}

export default App;
