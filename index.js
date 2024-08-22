import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url' ;
const _dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.use(express.static('public'));  

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/public/index.html')
})

app.listen(port, () => { 
    console.log(`Server running on port ${port}.`)
}
)