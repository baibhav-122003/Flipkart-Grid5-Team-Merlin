const {ethers } = require("ethers");
const abifile = require("./LoyalToken.json")
// const abi = abifile.abi  ;

// const provider = new ethers.AlchemyProvider('maticmum',process.env.ALCHEMY_ID);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

const approveService = async (amount) => {
    try {
    console.log("approveService called");
    const abi = abifile.abi  ;

    console.log("1")
    const ALCHEMY_ID = process.env.ALCHEMY_ID;
    const provider = new ethers.AlchemyProvider('maticmum',ALCHEMY_ID);
    
    console.log("2")
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(PRIVATE_KEY,provider)
    
    console.log("3")
    const signer = wallet.connect(provider)
    
    console.log("4")
    const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
    const contract1 = new ethers.Contract(CONTRACT_ADDRESS, abi, signer); 
    

    console.log("5")
    var balanceOf2 = await contract1.balanceOf('0xa5217E0c08e322A5D26A8652655Fbed1464F1Fa4');
    console.log(`before balanceOf: ${balanceOf2}`);
      // const r = await contract1.approve(process.env.FLIPKART_ADDRESS, amount);
      // console.log(r);
    } catch (error) {
      console.error("Error:", error);
    }
  };
    

// approveService(1000);

module.exports = { approveService };