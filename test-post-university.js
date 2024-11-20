const axios = require('axios');

async function testPostUniversityRequest() {
    try {
      const response = await axios.post('http://localhost:3000/university', {
        name: 'UNWE',
        town: 'Sofia'
      });
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }

(async () => {
    console.log('Testing POST /university...');
    await testPostUniversityRequest();
})()