import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import { createStore, applyMiddleware} from "redux";

import App from './App'


ReactDOM.render(<Provider store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}>
<BrowserRouter>
        <App /> 
        </BrowserRouter>
</Provider>, document.getElementById('root'));