import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url' ;
const _dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

let firstName = '';
let lastName = '';
let email = '';
let password = '';
let loginEmail = '';
let loginPassword = '';

app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true }));  

app.get('/', (req, res) => {
    res.render('signUp.ejs',)
  });

  app.post('/sign-up', (req, res) => {
    firstName = req.body['first-name'];
    lastName = req.body['last-name'];
    email = req.body['email'];
    password = req.body['password'];
    res.render('logIn.ejs', { errorMessage: '' });
  })

  app.post('/log-in', (req, res) => {
    loginEmail = req.body['login-email'];
    loginPassword = req.body['login-password'];
    if (email === loginEmail && password === loginPassword) {
        res.render('question.ejs');
    } else {
        res.render('logIn.ejs', { errorMessage: '<p>Wrong email or password!</p>'});

    }
  })

app.listen(port, () => { 
    console.log(`Server running on port ${port}.`)
}
)