-->  Title :- Quiz App

-->  Attribute :-

    1. subject
    2. difficulty
    3. result
    4. yourName
    5. fileName
    6. suggession
    7. leaderboard

-->  Functions :-

        1. start_Quiz()
        2. stop_Quiz()
        3. choose_Difficulty()
        4. choose_subject()
        5. submit_quiz()
        6. get_Hint()
        7. show_Leaderboard()
        8. invalid_CMD()

-->  Function arguments :-

        1. start_Quiz_App()
            a. yourName

        2. stop_Quiz_App()
            a. No argument

        3. choose_Difficulty()
            a. difficulty (easy, average, hard)

        4. submit_quiz()
            a. result
            b. fileName
            c. suggession

        5. invalid_CMD()
            a. No argument

        6. get_Hint()
            a. subject
            b. difficulty (easy, average, hard)
        
        7. choose_subject()
            a. subject
        
        8. show_Leaderboard()
            a. leaderboard





            if(command1 === "GK")
    {
        data.gkQuiz();
    }

    else if(command1 === "maths")
    {
        data.mathsQuiz();
    }

    else if(command1 === "java")
    {
        data.javaQuiz();
    }

    else if(command1 === "sql")
    {
        data.sqlQuiz();
    }

    else
    {
        data.invalidCMD();
    }