import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xFD1062e0c9C6527c4B06c9229094a94F664f715c"
);

export default instance;
