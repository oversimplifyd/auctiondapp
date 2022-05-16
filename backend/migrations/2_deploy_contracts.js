var AuctionRepository = artifacts.require("./AuctionRepository.sol");
var DeedRepository = artifacts.require("./DeedRepository.sol");

module.exports = function(deployer) {
  deployer.deploy(AuctionRepository);
  deployer.deploy(DeedRepository, "Ultra Auction NFT", "UANFT");
};