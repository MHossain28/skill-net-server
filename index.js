const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./Data/items.json');

app.get('/', (req, res) => {
    res.send('Running api in Server All Ok')
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const course = courses?.find(p=>p.id == id);
    res.send(course)
})
app.get('/category/:name', (req, res)=>{
    const categoryName = req.params.name;
    const categories = courses.filter( g=>g.category == categoryName );
    res.send(categories)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })