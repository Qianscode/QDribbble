"use strict";

var API_URL = "https://api.dribbble.com/v2/",
    ACCESS_TOKEN = "4e403af3241ae55c7d4a5bf1bce0144f2ea466c2f753e3db89e16d08375de449";

function fetchData(URL) {
  return fetch(URL, {
    headers: {
      "Authorization": "Bearer " + ACCESS_TOKEN
    }
  }).then((response) => response.json())
}

module.exports = {
  getShotsByType: function(type: string, pageNumber: ?number): ?Object {
    var URL = API_URL + "shots/?list=" + type;
    if (pageNumber) {
      URL += "&per_page=10&page=" + pageNumber;
    }

    return fetchData(URL);
  },
  getResources: function(url: ?string): ?Object {
    return fetchData(url);
  }
};
