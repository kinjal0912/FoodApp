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
};

export default SummaryApi;
