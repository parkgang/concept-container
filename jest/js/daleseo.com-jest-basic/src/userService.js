const axios = require("axios");
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

module.exports = {
  findOne(id) {
    return axios
      .get(`${API_ENDPOINT}/users/${id}`)
      .then((response) => response.data);
  },
};
