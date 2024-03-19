const path = require('path');
const fs = require('fs');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templet/views');
const partialPath = path.join(__dirname, '../templet/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>
{
    res.render('index',{
        title: 'Arcade Quiz'
    })
})


app.get('/startquiz', (req, res) =>
{
    fs.readFile('questions.json', (err, data) =>
    {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        res.render('startquiz', { jsonData: jsonData });
    });
});

app.get('/result', (req, res) =>
{
    res.render('result',{
        title: 'Arcade Quiz'
    })
})

app.get('/about', (req, res) =>
{
    res.render('about',{
        title: 'Arcade Quiz'
    })
})

app.listen(3000, () =>{
    console.log("server is up on port 3000");
})

app.get('*', (req, res) => {
    res.render('404',{
        title: 'Arcade Quiz',
        errorMessage1: 'Error 404: Page Not Found.',
        errorMessage2: 'Please Check the URL again.'
    })
})