const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  'home glow metal hood master laugh stone version dinner scene obey clap',
  // remember to change this to your own phrase!
  'https://sepolia.infura.io/v3/526d86f9a31e437eacaf0a73206469a3'

  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({
      gas: 2100000,
      gasPrice: 8000000000, from: accounts[0]
    });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
