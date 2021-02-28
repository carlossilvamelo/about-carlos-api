export default function handler(req, res) {
    // sendMsg().catch(err => console.log(err));
    const { method, params } = req;
    console.log(req.body.challenge)
    if(method === 'POST'){
        res.setHeader('content-type', 'text/plain');
        res.status(200);
        res.send(req.body.challenge);
    }
    
}

