const { ethers } = require("ethers");
const abifile = require("./LoyalToken.json");
const dotenv = require("dotenv").config();
// const abi = abifile.abi  ;

// const provider = new ethers.AlchemyProvider('maticmum',process.env.ALCHEMY_ID);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

const approveService = async (amount) => {
  try {
    const abi = abifile.abi;

    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract1 = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        abi,
        signer
      );
  
      console.log("approving")
      const r = await contract1.approve(
        process.env.REACT_APP_FLIPKART_ADDRESS,
        amount
      );
      await r.wait();
      console.log(r);
      console.log("approved");
    } else {
      console.log("Metamask not detected.");
    }

  } catch (error) {
    console.error("Error:", error);
  }
};

// approveService(1000);

module.exports = { approveService };
