const express = require('express')

const app = express()

const instruction = `
<h2>Instructions</h2>
✔ Don't use Calcs <br>
✔ Arrive before 30 mins <br>
✔ Don't carry electronics items
<br>
<br>
<button onclick="location.href='/seating'">Check Seating</button> 
<button onclick="location.href='/candidates'">Check Candidates</button>
<button onclick="location.href='/descripency'">Check Descripency</button>
`

const candies = [
    '12103500',
    '12105782',
    '12077794',
    '12075812',
    '12155551',
    '12103900',
    '12109509',
]
const seating_plane = [
    {
        course: 'CAP512',
        date: '22/02/2024',
        seating: '38-605D',
        start_time: '09:30 AM',
        end_time: '12:30 PM',
    },
    {
        course: 'CAP919',
        date: '26/02/2024',
        seating: '37-305',
        start_time: '04:30 PM',
        end_time: '06:30 PM',
    },
    {
        course: 'CAP916',
        date: '29/02/2024',
        seating: '32-211',
        start_time: '06:30 PM',
        end_time: '09:30 PM',
    },
]

const discripency_report = [
    {
        case_id: '121',
        discripency_date: '22/02/2024',
        title: 'Website not working',
        description: 'I visited the website and it was not working'
    },
    {
        case_id: '131',
        discripency_date: '20/02/2024',
        title: 'Name not showing in registered candidate',
        description: 'I registered for the exam but it is notsowing in the registered candidate list.'
    },
    {
        case_id: '141',
        discripency_date: '15/02/2024',
        title: 'Seating plan not showing',
        description: 'For me the seating plan is not showing.'
    },
]

app.get('',(req,res) => {
    res.send(instruction);
})

app.get('/seating',(req,res) => {
    var data = `<h2>Examintaion Seating Plans:<br><br></h2>`;
    for(let a of seating_plane){
        data += `
        <h3>Exam of ${a.course}</h3>
        <hr>
        <ul>
        <li>Course: ${a.course}</li>
        <li>Date: ${a.date}</li>
        <li>Start: ${a.start_time}</li>
        <li>End: ${a.end_time}</li></ul>
        <hr>
        `
    }
    res.send(data)
})

app.get('/candidates',(req,res) =>{
    var data = `<h3>Eligible Candidates</h3>`;
    for(let a of candies){
        data += `
        <hr>
        <p>${a}</p>
        <hr>
        `
    }
    res.send(data)
})

app.get('/descripency', (req,res) =>{
    var data = `<h2>Discripency Report:<br><br></h2>`;
    for(let a of discripency_report){
        data += `
        <h3>${a.title}</h3>
        <hr>
        <ul>
        <li>Descripency Id: ${a.case_id}</li>
        <li>Date: ${a.discripency_date}</li>
        <li>Start: ${a.description}</li></ul>
        <hr>
        `
    }
    res.send(data)
})

app.listen(3000,() => {
    console.log('server is up on port 3000')
})