

const axios = require('axios');
const SLACK_TOKEN = process.env.TOKEN_SLACK;
const URL_SLACK = process.env.URL_SLACK;
export default async function sendMsg(text) {
  
  const res = await axios.post(URL_SLACK, {
    channel: '#geral',
    text: text
  }, { headers: { authorization: `Bearer ${SLACK_TOKEN}` } });

  console.log('Done', res.data);
}