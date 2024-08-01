import axios from 'axios';

const getToken = async () => {
  try {
    const response = await axios.post(`${process.env.ISSUER_BASE_URL}/oauth/token`, {
      grant_type: 'client_credentials',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw new Error('Unable to retrieve access token');
  }
};

export default getToken;
