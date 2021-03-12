import { Route, Switch } from 'react-router';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header, Baby</h1>
      </header>
      <main>
        <h2>
          <Switch>
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
