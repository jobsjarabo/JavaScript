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
  if(dressNFTs.length < 500) {
  const newNFT = {
    dressName : _color + " " + _type + " dress",
    dressColor : _color,
    dressType : _type,
    dressDesign : _design,
    fabricType : _fabric
  }
  dressNFTs.push(newNFT);
  console.log("Minted: " + newNFT.dressName);
  } else {
  return console.log("Maximum supply of NFTs reached.");
  }
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(i = 0; i < dressNFTs.length; i++){
    console.log("\nNFT ID: \t\t\t" + (i + 1));
    console.log("Dress Name: \t" + dressNFTs[i].dressName);
    console.log("Dress Color: \t" + dressNFTs[i].dressColor);
    console.log("Dress Type: \t" + dressNFTs[i].dressType);
    console.log("Dress Design: " + dressNFTs[i].dressDesign);
    console.log("Fabric Type: \t" + dressNFTs[i].fabricType);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal Supply of NFTs is " + dressNFTs.length + ".");
}

// call your functions below this line
mintNFT("red", "A-line", "floral", "linen");
mintNFT("black & white", "maxi", "polka", "satin");
mintNFT("light blue", "bodycon", "plain", "cotton");

listNFTs();

getTotalSupply();
