import sendMsg from '../../services/slackSender';

export default function handler(req, res) {

  sendMsg("live!").catch(err => console.log(err));
  res.status(200).json({ })
}