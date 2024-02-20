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
        **--6. get_Hint()--**
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

        **--6. get_Hint()
            a. subject
            b. difficulty (easy, average, hard)--**
        
        7. choose_subject()
            a. subject
        
        8. show_Leaderboard()
            a. leaderboard (number of persons on leaderboard)

        9. getAnswer()
            a. question number

        --> loadnoats(one arguments)

        --> get_hint()

        --> Add question

        --> email

        --name=vimarsh1 --ans1=2 --ans2=4 --ans3=1 --ans4=3 --ans5=3 --ans6=1 --ans7=2 --ans8=4 --ans9=3 --ans10=1








        min 5 Function
        min 7 attributes
your_name, job_type, job_location, salary_range, designation, company_rating, perticular_company
company info
search on the basis of slkills
apply for any perticular company












var addNameScore=(name) =>
{
    var name_data= [];
    var data_item_name = {name};

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        name_data = JSON.parse(dataString); 
    }

    catch (e){}

    var duplicatedata = name_data.filter((data_item_name)=> data_item_name.name === name );

    if(duplicatedata.length === 0 )
    {
        name_data.push (data_item_name);
        fs.writeFileSync('quiz_app_data.json' , JSON.stringify(name_data));
    }

    else 
    {
        console.log("Name is already there.");
    }
};