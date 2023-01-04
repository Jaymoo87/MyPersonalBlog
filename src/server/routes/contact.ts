import * as express from 'express';
import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import MailGun from 'mailgun.js';
import { MessagesSendResult } from 'mailgun.js/interfaces/Messages';
import config from '../config';


const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username: 'api', 
    key: config.mailgun.apiKey
})



const contactRouter = express.Router()

contactRouter.post('/', async (req, res) => {
    const newEmail = req.body;
    try {
       
        const result: MessagesSendResult = await mailgun.messages.create(config.mailgun.domain, {
            to: config.mailgun.recipient,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
        })
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'ah mistakes... we meet again'})
    }
})

export default contactRouter;