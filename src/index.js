import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import {AppState} from "./context/AppState";


const draw = (
    <AppState>
        <App/>
    </AppState>
)

ReactDOM.render( draw, document.getElementById('root'));