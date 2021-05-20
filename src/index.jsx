import React from 'react'
import { Provider } from 'react-redux';
import { store } from 'reduxx/Store';

import 'style.css'

import App from './components/App'
import { render } from 'react-dom'


let rootElement = document.getElementById('root')

  render (
    <Provider store={store} >
      <App />
    </Provider>,
  rootElement

)
