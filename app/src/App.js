import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import ColorForm from './pages/colors/form'
import ShowColor from './pages/colors/show'
import Cookies from './pages/cookies'
import StarWars from './pages/starwars'
import StarwarsForm from './pages/starwars/form'
import BuzzWords from './pages/buzzwords'
import BuzzwordForm from './pages/buzzwords/form'
import Emojis from './pages/emojis'

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
          <Route exact path="/colors/new" component={ColorForm} />
          <Route exact path="/colors/:id" component={ShowColor} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/starwars/new" component={StarwarsForm} />
          <Route exact path="/fortune-cookies" component={Cookies} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route exact path="/buzzwords/new" component={BuzzwordForm} />
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
