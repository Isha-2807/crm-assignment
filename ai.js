const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

router.post('/rule-parse', async (req, res) => {
  const { prompt } = req.body;
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Convert this natural language to rule logic: ${prompt}`,
    max_tokens: 100
  });
  res.json({ rules: response.data.choices[0].text.trim() });
});

router.post('/message-suggestions', async (req, res) => {
  const { goal } = req.body;
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Generate 3 SMS messages for this goal: ${goal}`,
    max_tokens: 150
  });
  res.json({ suggestions: response.data.choices[0].text.trim() });
});

module.exports = router;
