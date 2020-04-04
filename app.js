const express = require('express');
const app = express();
const path = require('path');

app.set('views' , path.join(__dirname, "/views"));
app.set('view engine', 'pug');

const port = 3000;

app.get('/', (req,res) => {
    const dataArray = [
        {name: "Duc Tran", age: 18},
        {name: "Duc Huy", age:8}
    ];
    res.render("index",{
        users: dataArray
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});