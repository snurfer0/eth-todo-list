import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import Web3Provider from 'web3-react';
import Loading from './animations/Loading';
import { connectors } from "./connectors";
import './scss/style.scss';


// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  return (
    <Web3Provider connectors={connectors} libraryName={'web3.js'} web3Api={Web3}>
      <Router>
        <React.Suspense fallback={Loading()}>
          <Switch>
            <Route path="/" name="DefaultLayout" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </Web3Provider >
  )
}

export default App;