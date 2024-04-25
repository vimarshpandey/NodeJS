const path = require('path');
const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
const app = express();
const { connectToDb, getDb } = require('./db');

const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templet/views');
const partialsPath = path.join(__dirname, '../templet/partials');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

hbs.registerHelper('addOne', function (value) {
  return value + 1;
});

const loadQuestions = async () => {
  const db = getDb();
  const questionsCollection = db.collection('Questions');
  const questions = await questionsCollection.find().toArray();
  return questions;
};

const loadQuizAppData = async () => {
  const db = getDb();
  const quizDataCollection = db.collection('quiz_app_data');
  const quizData = await quizDataCollection.find().toArray();
  return quizData;
};

app.get('', (req, res) => {
  res.render('index', {
    title: 'Arcade Quiz'
  });
});

app.get('/startquiz', async (req, res) => {
  try {
    const jsonData = await loadQuestions();
    res.render('startquiz', { jsonData, title: 'Arcade Quiz' });
  } catch (error) {
    console.error('Error loading questions from database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/result', async (req, res) => {
  try {
    const name = req.query.hiddenName;
    const givenAnswers = [];

    for (const key in req.query) {
      if (key.startsWith('q')) {
        givenAnswers.push(req.query[key]);
      }
    }

    const jsonData = await loadQuestions();

    let score = 0;
    jsonData.forEach((question, index) => {
      if (question.options[question.correctAns - 1] === givenAnswers[index]) {
        score++;
      }
    });

    const percentage = (score / jsonData.length) * 100;

    const db = getDb();
    const quizDataCollection = db.collection('quiz_app_data');

    // Save quiz result
    await quizDataCollection.insertOne({ name, score });

    // Retrieve and sort quiz data
    const quizData = await loadQuizAppData();
    quizData.sort((a, b) => b.score - a.score);

    res.render('result', {
      title: 'Arcade Quiz',
      name,
      score,
      totalQuestions: jsonData.length,
      percentage,
      score_data: quizData,
      jsonData,
    });
  } catch (error) {
    console.error('Error processing quiz result:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Arcade Quiz'
  });
});

// Handle 404 Not Found
app.get('*', (req, res) => {
  res.render('404', {
    title: 'Arcade Quiz',
    errorMessage1: 'Error 404: Page Not Found.',
    errorMessage2: 'Please Check the URL again.'
  });
});

// Initialize database connection and start the server
connectToDb((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
    return;
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});