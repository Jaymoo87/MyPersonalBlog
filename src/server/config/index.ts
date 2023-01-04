import * as dotenv from 'dotenv'


dotenv.config();

// const mysql =  {
//         'host': process.env.DB_HOST!,
//         "user": process.env.DB_USER!,
//         "password": process.env.DB_PASSWORD!,
//         "port": Number(process.env.DB_PORT),
//         "database": process.env.DB_DATABASE!

    // }
    export default { 
        StripeInfo: {
        api_key: process.env.STRIPE_API_KEY!
    },
    
    mailgun: {
        apiKey: process.env.MAILGUN_API_KEY!,
        domain: process.env.MAILGUN_DOMAIN!,
        recipient: process.env.MAILGUN_TO_EMAIL!
    },


    mysql:  {
        'host': process.env.DB_HOST!,
        "user": process.env.DB_USER!,
        "password": process.env.DB_PASSWORD!,
        "port": Number(process.env.DB_PORT),
        "database": process.env.DB_DATABASE!
}}

    

    // export default {
    //     mysql, StripeInfo, mailgun
    // }

    

