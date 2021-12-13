// import { Web3Provider } from 'web3-react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from "./animations/Loading";
import { useEagerConnect, useInactiveListener } from './hooks';
import DefaultLayout from "./layout/DefaultLayout";
import './scss/style.scss';

// Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function getLibrary(provider) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}



const App = () => {
  

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <React.Suspense fallback={Loading()}>
          <Switch>
            <Route path="/" name="DefaultLayout" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </Web3ReactProvider>
  )

}

export default App;
