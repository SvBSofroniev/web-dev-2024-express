const axios = require('axios');

async function testPostSubjectRequest() {
    try {
      const response = await axios.post(`http://localhost:3000/subject`, {
        name: 'Physics',
      });
      console.log('Subject POST response:', response.data);
    } catch (error) {
      console.error('Subject POST error:', error.response ? error.response.data : error.message);
    }
  }

  (async () => {
    console.log('Testing POST /subject...');
    await testPostSubjectRequest();
  })()