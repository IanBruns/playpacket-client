import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicOnlyRoute from '../../utilities/PublicOnlyRoute';
import Header from '../Header/Header';

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
        <h2>
          <Switch>
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
              whenLoggedIn={whenLoggedIn}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </h2>
      </main>

    </div>
  );
}

export default App;
