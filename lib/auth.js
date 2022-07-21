import axios from 'axios';

/*export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const body = JSON.parse(req.body)
}*/

export const persons = async (firstname, lastname, email) => {
    const {data} = await axios.post('/api/login', {firstname, lastname, email});
    console.log(data)
}