import * as dotenv from 'dotenv'


dotenv.config();

const mysql =  {
        'host': process.env.DB_HOST!,
        "user": process.env.DB_USER!,
        "password": process.env.DB_PASSWORD!,
        "port": Number(process.env.DB_PORT),
        "database": process.env.DB_DATABASE!

    }
    const StripeInfo = {
        api_key: process.env.STRIPE_API_KEY!
    }

    export default {
        mysql, StripeInfo
    }

    console.log(StripeInfo)

