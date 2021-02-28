// import sendMsg from '../../services/slackSender';
const SLACK_TOKEN = process.env.TOKEN_SLACK;
const URL_SLACK = process.env.URL_SLACK;
export default function handler(req, res) {

  // sendMsg().catch(err => console.log(err));
  res.status(200).json({ tk: SLACK_TOKEN, url:URL_SLACK })
}