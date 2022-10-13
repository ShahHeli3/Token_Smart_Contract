const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const {ethers} = require("hardhat");

const contract = require("../artifacts/contracts/HeliToken.sol/HeliToken.json");
const hre = require("hardhat");

const alchemyProvider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main() {
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const owner = await tokenContract.owner();
    const bal = await tokenContract.balanceOf(signer.address);

    console.log("Token name:", name)
    console.log("Symbol:", symbol);
    console.log("Owner:", owner)
    console.log("Balance:", Number(hre.ethers.utils.formatEther(bal)));
}

main();