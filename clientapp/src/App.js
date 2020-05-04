import React, { useState } from "react";
import  { Component } from "react";
import Web3 from "web3";
import { MycontractAbi } from "./MycontractAbi.js";
import "./App.css";
import Animation from './components/Animation'


const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0x244c0a31256ee119a0d798cAd0AAfAED31265078"; //Contract Address
const MyContract = new web3.eth.Contract(MycontractAbi, contractAddress);


function App() {
  const [Item, setItem] = useState(0);
  

  const setData = async e => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await MyContract.methods.setItem(Item).estimateGas();
    const result = await MyContract.methods
      .setItem(Item)
      .send({ from: account, gas });
    console.log(result);
  };


  const getData = async e => {
    e.preventDefault();
    const result = await MyContract.methods.getItem().call();

    console.log(result);
  };
   

  return (
    <div>
    <div className="Background">

      <nav>
          <a>Direct Reading </a>  
          <p><small >MSA 8389</small></p>
          <p> Spring 2020</p>
          <br/><br/><br/>
      </nav>

      <header className="App-header">
        <form onSubmit={setData} >
          <label>
            Item:
            <input
              type="text"
              name="Item"
              value={Item}
              onChange={e => setItem(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Data" id='submit' className='buttonSubmit'/>
        </form>

      </header>
      <div className="demo">  
        <Animation/>  
      </div> 
      

    </div>
    <div>
      <br />
      <button onClick={getData} type="button" >
         Get Data
      </button>
    </div>
    </div>
  );
}

export default App;