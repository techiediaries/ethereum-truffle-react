import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { drizzleConnect } from "drizzle-react";
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'


class App extends Component {
  /*constructor(props, context) {
    super(props)
  
    this.contracts = context.drizzle.contracts
  }*/  
  render() {
    const {  drizzleStatus , accounts } = this.props;
    console.log("accounts:", accounts);

    if (this.props.web3.status === 'failed')
    {
      return <div>Error</div>;
    }

      return (
       
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">MyCoin</h1>
            <p>
              <strong>Total Supply</strong>:{" "}
              <ContractData
                contract="MyCoin"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              </p>
             </header>
        </div>
      );
    }



}


App.contextTypes = {
  drizzle: PropTypes.object,
  drizzleStore: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    MyCoin: state.contracts.MyCoin,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;
