import sendMsg from '../../services/slackSender';
export default function handler(req, res) {
    // sendMsg().catch(err => console.log(err));
    const { method, params } = req;
    if(method === 'POST'){
        
        sendMsg(JSON.stringify(req.body)).catch(err => console.log(err));
        res.status(200).json(req.body)
    }
    
}

