const path = require('path');
const express = require('express');

const app = express();

const pth1 = path.join(__dirname , '../file/views');

app.set('views', pth1);
app.set('view engine', 'hbs');
app.use(express.static(pth1));

app.get('', (req, res) => 
{
    res.render('index',{
        title:'First Program',
        name:'Anand'
    })
})

app.get('/about', (req, res) => 
{
    res.render('about',{
        title:'First Program',
        name:'Anand'
    })
})

app.get('/help', (req, res) => 
{
    res.render('help',{
        title:'First Program',
        name:'Anand'
    })
})

app.get('/contact', (req, res) => 
{
    res.render('contact',{
        title:'First Program',
        name:'Anand'
    })
})

app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
})