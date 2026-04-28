const express = require('express'); //bring in express

const app = express(); //creating an express app

app.use(express.json()); //parse json bodies

app.use(express.static('pubic')); //serve static files from "public" folder

const port = 3000; //defining our port

app.get('/', (req, res) =>{
    res.send('Hello from Express!')
});

const tasks = [
    'take out trash'
];



app.get('/api/getTasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/addTasks', (req, res) => {
    tasks.append(req);
});


app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});
