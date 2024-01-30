function startQuiz()
{
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                           **Welcome to Arcade Quiz**\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");
    console.log("                                          Please enter the subject in which you want to take quiz\n");
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



function gkQuiz()
{
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                              **General Knowledge Quiz**\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");
}

module.exports = {startQuiz, stopQuiz, invalidCMD, gkQuiz}