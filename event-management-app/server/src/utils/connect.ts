import mongoose from "mongoose";
import path from "path";

import dotenv from 'dotenv';
dotenv.config();


async function connect(){
    
    // const dbUri = process.env.MONGODB_URI;
    const dbUri = process.env.MONGODB_URI || "defaultUri";

    try{
        await mongoose.connect(dbUri);
        console.log("DB Connected");
    }
    catch(error : any){
        console.log(error.message);
        console.log(' ERROR: Could not connect to db ', error.message || error);
        process.exit(1);
    }
}



export default connect;