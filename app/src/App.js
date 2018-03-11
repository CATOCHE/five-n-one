import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Cookies from './pages/cookies'
import StarWars from './pages/starwars'
import BuzzWords from './pages/buzzwords'
import Emojis from './pages/emojis'
import BuzzwordForm from './pages/buzzwords'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    // The BrowserRouter passes 3 properties to props: history, location and submit
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/fortune-cookies" component={Cookies} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route exact path="/emojis" component={Emojis} />
          <Route
            exact
            path="/buzzwords/new"
            render={props => (
              <BuzzwordForm {...props} formTitle="Add buzzword" />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
