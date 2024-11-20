const axios = require('axios');

async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjects: [1],
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
(async () => {
  await testPostUserRequest()
})()