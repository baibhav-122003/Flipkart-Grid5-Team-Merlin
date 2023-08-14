const {ethers } = require("ethers");
const dotenv = require('dotenv').config();

const abifile = require("./LoyalToken.json")
// const abi = abifile.abi  ;

// const provider = new ethers.AlchemyProvider('maticmum',process.env.ALCHEMY_ID);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

const approveService = async (amount) => {

    console.log(`amount: ${amount}`);
    //TODO: see if we get signer without using alchemy provider


    // await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const provider = new ethers.BrowserProvider(window.ethereum);
    //   const signer = await provider.getSigner();

    const abi = abifile.abi  ;

    const provider = new ethers.AlchemyProvider('maticmum',process.env.ALCHEMY_ID);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)
    
    const signer = wallet.connect(provider)
    const contract1 = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer); 

    var balanceOf2 = await contract1.balanceOf('0xa5217E0c08e322A5D26A8652655Fbed1464F1Fa4');
    console.log(`before balanceOf: ${balanceOf2}`);


    // const r = await contract1.approve(process.env.FLIPKART_ADDRESS, amount);
    // console.log(r);
}

// approveService(1000);

module.exports = { approveService };