// Justin Blackburn
//Jan 30, 2025
//Project 1b

//function for on click action for the grade calculator
function onClickGrade( ){
    //getting the grades values from the grade fields from inputs
    var grade1 = document.getElementById("grade-1").value;
    var grade2 = document.getElementById("grade-2").value;
    var grade3 = document.getElementById("grade-3").value;
    var grade4 = document.getElementById("grade-4").value;
    var grade5 = document.getElementById("grade-5").value;
    var grade6 = document.getElementById("grade-6").value;
    
    //getting the weight values from the weigh fields inputs
    //Dividing it by a 100 to get percentages
    var weight1 = (document.getElementById("weight-1").value) /100;
    var weight2 = (document.getElementById("weight-2").value) /100;
    var weight3 = (document.getElementById("weight-3").value) /100;
    var weight4 = (document.getElementById("weight-4").value) /100;
    var weight5 = (document.getElementById("weight-5").value) /100;
    var weight6 = (document.getElementById("weight-6").value) /100;

    //creating grade that calls the gradCalculator function and passes all the grades and weights
    var grade = gradeCalculator(grade1, weight1, grade2, weight2, grade3, weight3, grade4, weight4, grade5, weight5, grade6, weight6);
    //rounding the grade 
    var roundedGrade = Math.round(grade * 100) / 100;
    //sending it out the the field output-1
    var out = document.getElementById("output-1");
    out.value = roundedGrade;
}

//function for on click action for the final calculator
function onClickFinal( ){
    //taking in the current grade, goal grade, and final weight and dividing all by 100 to act as percentages
    var current = document.getElementById("current-grade").value / 100;
    var goal = document.getElementById("goal-grade").value /100;
    var finalWeight = document.getElementById("final-weight").value / 100;

    //variable finalGrade that calls finalGradeCalculator and passes the goal, finalweight, and current
    var finalGrade = finalGradeCalculator(goal, finalWeight, current);
    //rounding
    var roundedFinalGrade = Math.round(finalGrade * 100) / 100;
    //sending it out the the field output-2
    var outFinalGrade = roundedFinalGrade * 100;
    var out = document.getElementById("output-2");
    out.value = `${outFinalGrade}%`;
}

//function to calculate grade
//takes all grades and weights
//returns the grade
function gradeCalculator(g1,w1, g2, w2, g3, w3, g4, w4, g5, w5, g6, w6){
    grade = (w1 * g1) + (w2 * g2) + (w3 * g3) + (w4 * g4) + (w5 * g5) + (w6 * g6);
    return grade;
}

//function to calculate final grade 
//takes goal, weight, and current
//returns final grade
function finalGradeCalculator(goal, weight, current) {
    var neededGrade = (goal - (1 - weight) * current) / weight;
    return neededGrade;
}

//init function to start functions on click
function init( ){
    var button = document.getElementById("button-1");
    button.addEventListener("click", onClickGrade);

    var button2 = document.getElementById("button-2");
    button2.addEventListener("click", onClickFinal);
}

//listener for when page is loaded to call init
window.addEventListener("load", init);