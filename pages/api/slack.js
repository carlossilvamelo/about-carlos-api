export default function handler(req, res) {
    // sendMsg().catch(err => console.log(err));
    const { method, params } = req;
    if(method === 'POST'){
        res.status(200).json(req.body)
    }
    
}

