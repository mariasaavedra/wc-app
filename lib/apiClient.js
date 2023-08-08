import axios from 'axios';
//FixThis: Put these in .env file
const tokenUrl ='https://test.salesforce.com/services/oauth2/token';    // Salesforce token endpoint URL (sandbox:test.salesforce.com/services/oauth2/token , org:login.salesforce.com/services/oauth2/token)
const clientId ='3MVG9hz9IjkO5fmXfTXB7b8yqSriTKfV0s6_o7NY8LqV5QzqrAZfv1tr1R9lcGzhDTkuwhJeDtdCU4ABbyKTb';      //  Salesforce client ID
const clientSecret ='5D0CD956812C248B312C5FCCD6D748A038D41F90EEBA7B7BC319C3DAE076DFB3';  // Salesforce client secret
const username ='timd061677@wecodekc.org.eventtest';       // Salesforce username
const password ='T1i2m3d4';                       //Salesforce password
const securityToken ='hSaVHI38Hcc60jBubUU3MQgt';  //Salesforce security token

// Function to obtain an access token using the user-password flow
const getAccessToken = async () => {
  const response = await axios.post(
    tokenUrl,
    new URLSearchParams({
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: `${username}`,
      password: `${password}${securityToken}`,
    }).toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
};

// Create the API client instance
const apiClient = axios.create({
     baseURL: 'https://wecodekc--eventtest.sandbox.my.salesforce.com',  // Replace with SF instance_url from Postman 
});

// Add the access token and authorization date to the request headers
apiClient.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers['X-Authorization-Date'] = new Date().toUTCString();
  return config;
});

// Function to add a new Contact in Salesforce
export const addContact = async (contactData) => {
  try {
    const response = await apiClient.post('/services/data/v52.0/sobjects/Contact', contactData);
    return response.data;
  } catch (error) {
    console.error('Contact creation failed:', error);
    throw error;
  }
};

// Function to update a Contact in Salesforce
export const updateContact = async (contactId, contactData) => {
  try {
    const response = await apiClient.patch(`/services/data/v52.0/sobjects/Contact/${contactId}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Contact update failed:', error);
    throw error;
  }
};

export default apiClient;
