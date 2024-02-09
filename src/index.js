import React from 'react'
import ReactDOM  from 'react-dom/client';
// import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import Store from './context/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <Provider store={Store}>
 <Router>
    <App />
</Router>
 </Provider>

)