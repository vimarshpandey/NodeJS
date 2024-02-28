const path = require('path');
const express = require('express');

const app = express();

const pth1 = path.join(__dirname , '../file/views');
const style1 = path.join(__dirname , '../file/style');
const img1 = path.join(__dirname , '../file/img');

app.set('views', pth1);
app.set('view engine', 'hbs');
app.use(express.static(pth1));
app.use("/style",express.static(style1));
app.use("/img",express.static(img1));

app.get('', (req, res) =>
{
    res.render('index',{
        title:'Varanasi',
    })
})

app.get('/history', (req, res) => 
{
    res.render('history',{
        title:'Varanasi',
        his: 'Varanasi is one of the worlds oldest continually inhabited cities. Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago. The Lion capital of Ashoka at nearby Sarnath has been interpreted to be a commemoration of the Buddhas first sermon there in the fifth century BCE.'
    })
})

app.get('/gallery', (req, res) => 
{
    res.render('gallery',{
        title:'Varanasi',
        name: 'img1.jpg'
    })
})

app.get('/timing', (req, res) => 
{
    res.render('timing',{
        title:'Varanasi',
        time: 'Varanasi is a city in the state of Uttar Pradesh, located in the region of India. If traveling to this city is what you are thinking about, then Cleartrip will guide you. Traveling to Varanasi is easy thanks to the railway connectivity. Book your railway tickets conveniently with just a few taps on the Cleartrip app or website.The station of the city is named as VARANASI JUNCTION and its station code is BSB. The station takes care of all the basic amenities of the passengers.The station is well-connected to a number of Indian cities. Some of the major routes include to the places of Kanpur Central, Lucknow Nr, and New Delhi. There are 22 weekly trains connecting Kanpur Central to Varanasi, 1 weekly trains connecting Lucknow Nr to Varanasi, and 5 weekly trains connecting New Delhi to Varanasi.Some of the popular trains traveling to Varanasi are Budhpurnima Exp(14224) to Rajgir operating 7 times a week, K V Exp(14257) to New Delhi operating 7 times a week, and Bundelkhand Exp(11108) to Gwalior operating 7 times a week. Traveling in one of these trains will be a memorable experience.The attractions of Varanasi are many. As soon as you enter the city, you may begin your tour as there are varied points of interest located near the Varanasi station itself.'
    })
})

app.get('/reach', (req, res) => 
{
    res.render('reach',{
        title:'Varanasi',
        air: 'Varanasi has an international airport - Lal Bahadur Shastri International Airport. You can book flights directly to Varanasi.',
        train: 'Varanasi Junction is a major railway station with well-connected trains. You can reach Varanasi by train from various cities.',
        road: 'Varanasi is well-connected by roads. You can reach Varanasi by bus or hire a taxi. National Highways connect the city to nearby major towns.',
        boat: 'If you are traveling from nearby places along the Ganges, you can also consider reaching Varanasi by boat.'
    })
})

app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
})