const hre = require("hardhat");

async function main() {
  const HeliToken = await hre.ethers.getContractFactory("HeliToken");
  const heliToken = await HeliToken.deploy(100000000, 50);

  await heliToken.deployed();

  console.log("Token Deployed: ", heliToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
