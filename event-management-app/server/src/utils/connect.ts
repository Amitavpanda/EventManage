import mongoose from "mongoose";
import logger from './logger';
import path from "path";

import dotenv from 'dotenv';
dotenv.config();

const appLogger = logger.child({ filename: path.basename(__filename) });

async function connect(){
    
    const dbUri = process.env.MONGODB_URI || "defaultConnectionURI";

    try{
        await mongoose.connect(dbUri);
        appLogger.info("DB Connected");
    }
    catch(error : any){
        appLogger.error('Could not connect to db ', error.message || error);
        process.exit(1);
    }
}



export default connect;