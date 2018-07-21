# Ethereum Dapp with Truffle and React


Start by installing Truffle and Ganache CLI:

```bash
$ npm install -g truffle
$ npm install -g ganache-cli
```

Next run ganache-cli:

```bash
$ ganache-cli 
```

Compile and migrate the contract using:

```bash
$ truffle compile
$ truffle migrate
```

Install Metamask extension and connect to local network using custom RPC `http://localhost:8545`

Navigate inside the `frontend` project and run:

```bash
$ npm install
```

Navigate inside the `frontend/node_modules` folder and create a symbolic link to the `../../build/contracts` folder:


```bash
ln -s ../../build/contracts contracts
```

Next, start the application:

```bash
$ npm start
```

Go to `http://localhost:3000` with your browser.

