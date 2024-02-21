-->  Title :- Quiz App

-->  Attribute :-

    1. name
    2. ans
    3. questionnumber
    4. num
    5. questions
    6. options
    7. correctAns
    8. hint
    9. questionToRemove

-->  Functions :-

    1. welcomeMSG()
    2. getQuestion()
    3. giveAns()
    4. getResult()
    5. getAnswer()
    6. getLeaderboard()
    7. getHint()
    8. addQuestion()
    9. removeQuestion()

-->  Function arguments :-

    1. welcomeMSG()
        a. No Argument

    2. getQuestion()
        a. No argument

    3. giveAns()
        a. name
        b. ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10

    4. getResult()
        a. name

    5. getAnswer()
        a. name
        b. questionnumber

    6. getLeaderboard()
        a. num
    
    7. getHint()
        a. questionnumber
    
    8. addQuestion()
        a. question
        b. option1, option2, option3, option4
        c. correctAns
        d. hint

    9. removeQuestion()
        a. questionToRemove


    
    Some long commands :-


        --name=anjali --ans1=2 --ans2=4 --ans3=1 --ans4=3 --ans5=3 --ans6=1 --ans7=2 --ans8=4 --ans9=3 --ans10=1

        --question="How many planets are there in our solar system" --option1="1. 5" --option2="2. 6" --option3="3. 7" --option4="4. 8" --correctAns=4 --hint="Hint for question 11"

        --questionToRemove="How many planets are there in out solar system" 