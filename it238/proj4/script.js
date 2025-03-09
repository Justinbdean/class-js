// Justin Blackburn
//March 7, 2025
//Project 4

//Parse all the objects in the quizData JSON
var answerObjects = JSON.parse(quizSheet);

//creating 4 arrays to house values to be displayed later
var questionList = [];
var hintList = [];
var answerList = [];
var responseList = [];

//function to get Answers from the JSON and add to the answerList
var getAnswers = ( ) => {
    for(obj of answerObjects){
        answerList.push(obj.answer);
    }
}

//function to get questions from the JSON and add to the questionList
var getQuestions = ( ) => {
    for(obj of answerObjects){
        questionList.push(obj.question);
    }
    questIndex = 0;
    for(quest of questionList){
        var questionObj = document.querySelector("#q" + questIndex);
        questionObj.innerHTML = quest;
        questIndex++;
    }
}

//function to get hints from JSON and add to hintList
var getHints = ( ) => {
    for(var obj of answerObjects){
        hintList.push(obj.hint);
    }
}

//function to show hint on click
function showHint (e) {
    //assiging btnObj to the target of the click
    var btnObj = e.target;
    //taking to question number from the id and using that to index
    var btnIndex = btnObj.id.charAt(3);
    //creating the hint id taking the index value
    var hintObj = document.querySelector("#hint" + btnIndex);
    //creating the response from responseList using the index
    var hintRes = hintList[btnIndex];
    //sending the response to innerHTML to display
    hintObj.innerHTML = hintRes;
    //checking to see if visible or not and the flip to opposite on click
    if(hintObj.style.display == "block"){
        hintObj.style.display = "none";
    }else{
        hintObj.style.display = "block";
    };
}

//function to get answers
function showAnswers ( ) {
    //reseting the responseList for each submit
    responseList.length = 0;
    //getting the selected radio button that were checked
    var radioSelected = document.querySelectorAll("input[type = 'radio']:checked");
    //for loop to add the values from radio buttons to list to compare later
    radioSelected.forEach(radio => {
        responseList.push(radio.value);
    })
    var correctAnswers = 0;
    //if statement to ensure all questions were answered
    if(responseList.length == 5){
        //value to index from
        answerIndex = 0;
        
        //for loop to go through each of the responses
        for(var response of responseList){
            //obtain where the image needs to be displayed from quiz
            var imgObj = document.querySelector("#img" + answerIndex + responseList[answerIndex]);
            //if statement to determine what image to show
            //if true -> render check
            //if false -> render remove
            if(response == answerList[answerIndex]){
                var imageFile = "../proj4/images/check.png"
                imgObj.src = imageFile;
                correctAnswers ++;
            }
            else{
                var imageFile = "../proj4/images/remove.png"
                imgObj.src = imageFile;
            }
            //increase index for following questions
            answerIndex++;
        }
        //display score from quiz
        var totalScore = document.querySelector("#totalScore");
        totalScore.innerHTML = ("Your score is " + correctAnswers + "/5");
    }
    //if not all 5 questions were answered create message to go back and answer every question
    else{
        var error = document.querySelector("#errorMessage");
        error.innerHTML = "You did not answer each question."
    }
}

//init function
var init = ( ) => {
    //call getQuestions, getAnswers, and getHints so the lists are ready to be used
    getQuestions();
    getAnswers();
    getHints();

    //event listener so when user submits quiz the showAnswers function is called
    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", showAnswers);

    //for loop to check if any hint button is pressed and to display hint
    for(var i = 0; i <= 4; i++){
        document.querySelector('#btn' + i).addEventListener("click", showHint);
    }
}

document.addEventListener("DOMContentLoaded", init);