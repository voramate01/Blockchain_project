pragma solidity >=0.4.21 <0.7.0;  
	  
contract Mycontract {  
    string Item;  
  
    constructor() public {  
        Item = "Item";  
    }  
  
    function getItem() public view returns(string memory) {  
        return Item;  
    }  
  
    function setItem(string memory _Item) public {  
        Item = _Item;  
    }  
}  
