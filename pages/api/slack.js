import sendMsg from '../../services/slackSender';

export default function handler(req, res) {
    
    const { method, params } = req;
    console.log(req.body.challenge)
    if(method === 'POST'){
        sendMsg(JSON.stringify(req.body)).catch(err => console.log(err));
        res.status(200).json(req.body)
    }
    
}

