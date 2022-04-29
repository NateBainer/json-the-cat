const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(domain, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      let errMessage = `${breedName} is not a recognized breed.`;
      callback(errMessage, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };