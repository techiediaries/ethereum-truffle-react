pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract MyCoin is StandardToken {
  string public name = 'MyCoin';
  string public symbol = 'MC';
  uint8 public decimals = 2;

  uint public INITIAL_SUPPLY = 10000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}