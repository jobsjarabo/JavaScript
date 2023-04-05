/*
REQUIREMENTS
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const dressNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_color, _type, _design, _fabric) {
  if(dressNFTs.length <= 500) {
  i = dressNFTs.length + 1;
  newNFT = {
    "Dress Name" : _color + " " + _type + " dress",
    "Dress Color" : _color,
    "Dress Type" : _type,
    "Dress Design": _design,
    "Type of Fabric": _fabric
  }
  dressNFTs.push(eval("dress" + i +" = "+ "newNFT"));
  delete newNFT
  };
};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(j = 0; j < dressNFTs.length; j++){
    console.log(dressNFTs[j])
  }
};

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply of NFTs is " + dressNFTs.length)
};

// call your functions below this line
mintNFT("red", "A-line", "floral", "linen");
mintNFT("black & white", "maxi", "polka", "satin");
mintNFT("light blue", "bodycon", "plain", "cotton");

listNFTs();

getTotalSupply();
