const path = require('path');
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
        title: 'ExpressApp',
        name: 'My Name'
    })
})

app.get('/about', (req, res) =>
{
    res.render('about',{
        title: 'About Me',
        name: 'My Name',
        aboutText: 'This is about page'
    })
})

app.get('/help', (req, res) =>
{
    res.render('help',{
        title: 'Help',
        name: 'My Name',
        helpText: 'This is help page'
    })
})

app.listen(3000, () =>{
    console.log("server is up on port 3000");
})

app.get('/ExpressApp', (req, res) =>
{
    res.send({
        forecast: "It is snowing",
        location: 'Kashmir'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'My Name',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'My Name',
        errorMessage: 'Page not found.'
    })
})