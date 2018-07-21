import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from 'drizzle-react-components'

import MyCoin from "contracts/MyCoin.json";

console.log(MyCoin);

const options = {
    web3: {
      block: false,
      fallback: {
        type: "ws",
        url: "ws://127.0.0.1:8545"
      }
    },
    contracts: [MyCoin],
    events: {}
};


ReactDOM.render(
    <DrizzleProvider options={options}>
    <LoadingContainer>
    <App />
    </LoadingContainer>
    </DrizzleProvider>, 
    document.getElementById('root'));

registerServiceWorker();
