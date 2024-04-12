import express from "express";
import connect from './utils/connect';
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



app.use(cors());
const port = process.env.PORT || 1337;

app.listen(port, async () => {
    console.log(`App is running at http://localhost:${port}`);

    try {
        await connect();
        routes(app);
    } catch (error) {
        console.log('Error during database connection:', error);
        process.exit(1);
    }
});


export default app;

