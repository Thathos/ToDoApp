const express = require('express'); //bring in express

const app = express(); //creating an express app

app.use(express.json()); //parse json bodies

app.use(express.static('pubic')); //serve static files from "public" folder

const port = 3000; //defining our port

app.get('/', (req, res) =>{
    res.send('Hello from Express!')
});

//GET request returns an array of items
app.get("/api/tasks", (req, res) =>{
    const items = [
        {id: 1, name: "Take out trash"},
        {id: 2, name: "Pay rent bill"},
    ];
    res.json(items);
})






app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});
