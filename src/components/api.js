import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

// Export an object with a "search" method that searches the Random User API
export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
