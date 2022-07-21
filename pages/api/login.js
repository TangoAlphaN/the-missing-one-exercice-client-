export default function handler(req, res) {
    if (req.method === 'POST') {
        const {firstname, lastname, email} = req.body;
        res.json({
            firstname,
            lastname,
            email,
            success: true
        })
    }
}