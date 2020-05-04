export const MycontractAbi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getItem",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc412eaba"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_Item",
          "type": "string"
        }
      ],
      "name": "setItem",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1fae52b8"
    }
  ];