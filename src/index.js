import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import App2 from './App2'

import * as serviceWorker from './_lib/service-worker'

import './_scss/app.scss'

ReactDOM.render(
  process.env.REACT_APP_DEVELOPER_ENV === 'colin' ? 
  <BrowserRouter>
    <App2/>
  </BrowserRouter> : 
  <App/>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
