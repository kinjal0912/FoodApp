const backendDomain = "http://localhost:7000";

const SummaryApi = {
  signup: {
    url: `${backendDomain}/api/user/signup`,
    method: "post",
  },
  signin: {
    url: `${backendDomain}/api/user/signin`,
    method: "post",
  },
  addRestaurant: {
    url: `${backendDomain}/api/restaurant/add`,
    method: "post",
  },
  getRestaurant: {
    url: `${backendDomain}/api/restaurant/getrestro`,
    method: "get",
  },
  addMenu: {
    url: `${backendDomain}/api/menu/addmenu`,
    method: "post",
  },
};

export default SummaryApi;
