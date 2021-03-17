import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import PrivateRoute from '../../utilities/PrivateRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicOnlyRoute from '../../utilities/PublicOnlyRoute';
import Header from '../Header/Header';
import HomePage from '../../routes/HomePage/HomePage';
import RulesPage from '../../routes/RulesPage/RulesPage';
import GamesRulesPage from '../../routes/GameRulesPage/GameRulesPage';
import SearchPage from '../../routes/SearchPage/SearchPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function whenLoggedIn() {
    setIsLoggedIn(true);
  }

  function whenLoggedOut() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header
          whenLoggedOut={whenLoggedOut}
          isLoggedIn={isLoggedIn}
        />
      </header>
      <main>
        <Switch>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <PublicOnlyRoute
            path='/Login'
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
          <PublicOnlyRoute
            path='/Register'
            component={RegistrationPage}
          />
          <PrivateRoute
            path='/Home'
            component={HomePage}
          />
          <PrivateRoute
            path='/MyRules'
            component={RulesPage} />
          <PrivateRoute
            path='/Rules/:gameId'
            component={GamesRulesPage}
          />
          <PrivateRoute
            path='/Search'
            component={SearchPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>

    </div>
  );
}

export default App;
