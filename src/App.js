/* @flow */
import * as React from 'react'

import Header from './components/organisms/feature/index'
import HomePage from './components/templates/index'

import './bootstrap'

const App = (): React.Element<*> => (
  <div className='container'>
    <HomePage />
  </div>
)

export default App
