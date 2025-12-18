// Simple test script without dotenv dependency
const { GoogleGenerativeAI } = require('@google/generative-ai');

// PASTE YOUR API KEY HERE:
const API_KEY = 'AIzaSyARjmcFDawTZXbGlzfMzQP7vrOWdRcg2MQ';

async function testAPIKey() {
  console.log('=== Testing Google Gemini API Key ===\n');

  if (!API_KEY || API_KEY === 'your_api_key_here') {
    console.error('❌ ERROR: Please set your API key in this file');
    process.exit(1);
  }

  console.log('✓ Testing API key:', API_KEY.substring(0, 20) + '...');
  console.log('✓ API key length:', API_KEY.length, 'characters\n');

  try {
    console.log('Testing API connection...\n');
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent('Say "Hello, API test successful!"');
    const response = await result.response;
    const text = response.text();

    console.log('✅ SUCCESS! API is working!\n');
    console.log('Response:', text);
    console.log('\n=== Your API key is valid and working! ===');
    console.log('\nYou can now run: npm run dev');

  } catch (error) {
    console.error('❌ ERROR: API call failed\n');
    console.error('Error message:', error.message);
    console.error('Error status:', error.status);

    console.log('\n=== Problem Identified ===');

    if (error.message.includes('API_KEY_INVALID')) {
      console.log('Your API key is invalid or has been revoked.');
      console.log('\nSolution:');
      console.log('1. Go to: https://aistudio.google.com/app/apikey');
      console.log('2. Delete the old key');
      console.log('3. Create a new API key');
      console.log('4. Update your .env.local file with the new key');
    } else if (error.status === 404) {
      console.log('The model "gemini-pro" is not available for your API key.');
      console.log('\nSolution:');
      console.log('1. Make sure you created the API key correctly');
      console.log('2. Try creating a new API key at: https://aistudio.google.com/app/apikey');
    } else {
      console.log('Unknown error occurred.');
      console.log('\nSolution:');
      console.log('1. Verify your API key at: https://aistudio.google.com/app/apikey');
      console.log('2. Make sure the API key is not restricted');
      console.log('3. Try generating a new API key');
    }

    process.exit(1);
  }
}

testAPIKey();
