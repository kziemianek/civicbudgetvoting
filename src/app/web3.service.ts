import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  private _web3: Web3;

  constructor() {
    // connect to local ethereum network
    this._web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545')
    );
  }

  get web3() {
    return this._web3;
  }
}
