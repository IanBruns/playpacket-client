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
            path={'/login'}
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
          <PublicOnlyRoute
            path={'/register'}
            component={RegistrationPage}
          />
          <PrivateRoute
            path={'/home'}
            component={HomePage}
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
