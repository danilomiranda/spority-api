import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from '../pages/search'
import Album from '../pages/album'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/album/:id' component={Album} />
    </Switch>
  </main>
)

export default Main
