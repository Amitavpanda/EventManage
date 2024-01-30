import express from "express";
import connect from './utils/connect';
import logger from './utils/logger';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import routes from "./routes";
import cors from 'cors';


const app = express();


app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());


const appLogger = logger.child({ filename: path.basename(__filename) });

app.use(cors());
const port = process.env.PORT || 1337;

app.listen(port, async () => {
    appLogger.info(`App is running at http://localhost:${port}`);

    try {
        await connect();
        routes(app);
    } catch (error) {
        appLogger.error('Error during database connection:', error);
        process.exit(1);
    }
});


export default app;

