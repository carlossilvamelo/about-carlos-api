

const axios = require('axios');
const SLACK_TOKEN = 'xoxb-1808428288180-1795488406390-Qyr80v0IduIggcsuCne3bTPL';

export default async function sendMsg() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#geral',
    text: 'Hello Geral, World!'
  }, { headers: { authorization: `Bearer ${SLACK_TOKEN}` } });

  console.log('Done', res.data);
}