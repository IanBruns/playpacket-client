import { Route, Switch } from 'react-router';
import './App.css';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicOnlyRoute from '../../utilities/PublicOnlyRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header, Baby</h1>
      </header>
      <main>
        <h2>
          <Switch>
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
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
