export default function handler(req, res) {
    // sendMsg().catch(err => console.log(err));
    const { method, params } = req;
    res.status(200).json({ method, params })
}