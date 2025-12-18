// Test script to verify Google Gemini API key
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '.env.local' });

async function testAPIKey() {
  console.log('=== Testing Google Gemini API Key ===\n');

  // Check if API key is loaded
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('❌ ERROR: GEMINI_API_KEY not found in .env.local');
    console.log('\nMake sure .env.local exists with:');
    console.log('GEMINI_API_KEY=your_api_key_here');
    process.exit(1);
  }

  console.log('✓ API key loaded:', apiKey.substring(0, 20) + '...');
  console.log('✓ API key length:', apiKey.length, 'characters\n');

  // Test the API
  try {
    console.log('Testing API connection...\n');
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent('Say "Hello, API test successful!"');
    const response = await result.response;
    const text = response.text();

    console.log('✅ SUCCESS! API is working!\n');
    console.log('Response:', text);
    console.log('\n=== Your API key is valid and working! ===');

  } catch (error) {
    console.error('❌ ERROR: API call failed\n');
    console.error('Error message:', error.message);
    console.error('Error status:', error.status);
    console.error('Error details:', error.errorDetails);

    console.log('\n=== Troubleshooting ===');
    console.log('1. Verify your API key at: https://aistudio.google.com/app/apikey');
    console.log('2. Make sure the API key is not restricted');
    console.log('3. Try generating a new API key');
    console.log('4. Ensure you have API access enabled');

    process.exit(1);
  }
}

testAPIKey();
