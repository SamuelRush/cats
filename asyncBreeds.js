// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    if (!error) {
      //console.log('Callback: I have the data!');
      callback(data)
    } else {
      //console.log('data not found');
      callback(undefined);
    }
    
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// we try to get the return value

const useData = function(data){
  console.log('Return Value: ', data) // => will NOT print out details, instead we will see undefined!
}

//breedDetailsFromFile('Bombay',useData);

module.exports = breedDetailsFromFile;