import express from 'express';
import {promisify} from "util";
import fs from "fs";
const writeFile= promisify(fs.writeFile);
/* const appendFile=promisify(fs.appendFile); */
// Hier musst du wahrscheinlich noch sachen importieren damit du Dateien schreiben kannst. 

const app = express();


const loggingMiddleware = async (req, res, next) => {
    // Hier fehlt Code
    //datum=> new Date
    //path=> req
    //
    const entry=(`\n${new Date().toISOString()}:${req.originalUrl}`);
    //zu einem log.txt schicken=>fs

    await writeFile("log.txt",entry, {flag:"a"})
    /* await writeFile("log.txt",entry); */
    next()
}

app.use(loggingMiddleware)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    res.send('Users Page')
})
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})


app.listen(3000, () => console.log('Server Started'))