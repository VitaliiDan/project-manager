import React, {useContext, useEffect, useState} from "react";
import Header from "./Header";
import Pagination from '@material-ui/lab/Pagination';
import {AppContext} from "../context/appContext";
import UserCard from "./UserCard";

const FirstPage = () => {
    const {state} = useContext(AppContext);
    const [paginationPage, setPaginationPage] = useState(1);
    const [drawArray, setDrawArray] = useState();
    const countPerPage = 15;

    useEffect(() => {
        if (state.users[0]) {
            const tempArray = state.users.map((el, index) => {
                if ((index / countPerPage >= paginationPage - 1) && (index / countPerPage < paginationPage)) {
                    return <UserCard key={el.id} user={el}/>
                }
            });
            setDrawArray([...tempArray])
        }
    }, [paginationPage, state.users])

    const handleChange = (event, value) => {
        setPaginationPage(value);
    };

    let pageCount = state.users.length % countPerPage === 0
        ?
        state.users.length / countPerPage
        :
        ((state.users.length - state.users.length % countPerPage) / countPerPage) + 1


    return (
        <div className='firstPageWrapper'>
            <Header/>
            <div className='firstPageWrapper_typography'>
                <h1>Wybierz teamleader’a <span> (wybierz jednego uzytkownika by przejść dalej): </span></h1>
            </div>
            <div className='firstPageWrapper_cardsWrapper'>
                {drawArray ? drawArray : null}
            </div>
            <Pagination
                className='firstPageWrapper_pagination'
                count={pageCount}
                page={paginationPage}
                onChange={handleChange}
            />
        </div>
    )
}

export default FirstPage;