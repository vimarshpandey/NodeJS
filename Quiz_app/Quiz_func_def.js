function welcomeMSG()
{
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                           **Welcome to Arcade Quiz**\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");
}

function stopQuiz()
{
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                            **Thanks for participating**");
    console.log("                                                              See you later buddy👋👋\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
}

function invalidCMD()
{
    console.log("                                                     **Please enter a valid command**");
}




function startQuiz(candidateName)
{
    console.log("\n                    Hello",candidateName,", Please enter the subject in which you want to take quiz from the below given options\n");
    console.log("                                                                   1. gk");
    console.log("                                                                   2. maths");
    console.log("                                                                   3. java");
    console.log("                                                                   4. mysql");
    console.log("                                                                   5. english\n");
}

function chooseSubject(rl)
{
    rl.question('                                                       ---- Please Enter the subject ----\n', (subject) => {
        if (subject.trim() === 'stop')
        {
          stopQuiz();
          rl.close();
        }
        else if (subject.trim() === 'gk' || subject.trim() === 'maths' || subject.trim() === 'java' || subject.trim() === 'mysql' || subject.trim() === 'english')
        {
            console.log("                                                  ---- Please Select the Difficulty Level ----\n")
            console.log("                                                                   1. easy");
            console.log("                                                                   2. average");
            console.log("                                                                   3. hard\n");
            console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
            console.log("                                                              **Quiz on ",subject,"**\n");
            console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");
            rl.close();
        }
        else
        {
            console.log("                                                    ---- Please enter a valid subject name ----\n");
            chooseSubject(rl);
        }
    });  
}

function chooseDifficulty()
{

}


module.exports = {startQuiz, stopQuiz, invalidCMD, chooseSubject, welcomeMSG, chooseDifficulty}