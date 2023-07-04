import React from 'react'
import ReactDOM from 'react-dom/client'
import { Aplication } from "./App"
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Aplication />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)
