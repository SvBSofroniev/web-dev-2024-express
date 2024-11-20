const axios = require('axios');

async function testGetUsersRequest() {
    try {
      const response = await axios.get(`http://localhost:3000/user`);
      console.log('Users GET response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Users GET error:', error.response ? error.response.data : error.message);
    }
  }
  
  (async () => {
    console.log('GET Users:');
    await testGetUsersRequest();
  })()