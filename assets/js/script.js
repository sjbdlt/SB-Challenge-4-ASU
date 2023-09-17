var timerlbl = document.getElementById("timer");
var divquestionsec = document.getElementById("divtext");
var questionid = document.getElementById("question");
var answerid1 = document.getElementById("answer1");
var answerid2 = document.getElementById("answer2");
var answerid3 = document.getElementById("answer3");
var answerid4 = document.getElementById("answer4");
var startbtn = document.getElementById("startquiz");
var resultslbl = document.getElementById("lblresults");
var highscorenametxt = document.getElementById("highscorename");
var lblhighscorename = document.getElementById("lblhighscorename");
var savebtn = document.getElementById("savehighscore");

var timer;
var timectbdown;
var isover = 0;
var correct = 0;
var wrong = 0;
var qcount = 0;
var cpercent = 0;
var quizattempts = 0;

function init(){
    resultslbl.hidden = true;
    highscorenametxt.hidden = true;
    lblhighscorename.hidden = true;
    savebtn.setAttribute("hidden", true);
}



function startquiz (event) {
    event.preventDefault();

    isover = 0;
    correct = 0;
    wrong = 0;
    qcount = 0;
    cpercent = 0;
    highscorenametxt.value = ''
    resultslbl.hidden = true;

    timectbdown = 120
    starttimer();
    startbtn.setAttribute("hidden", true);
    
    question1();
}

function starttimer() {
    timer = setInterval(function() {
     timectbdown--;
     timerlbl.innerText = timectbdown;
     if (timectbdown >= 0 && isover == 1) { 
          clearInterval(timer);
          showresults(1)
      }
      if (timectbdown === 0) {
        clearInterval(timer);
        showresults(2)
      }
    }, 1000);
  }

function showresults(){    
    clearInterval(timer);
    timerlbl.innerText = 0;
    resultslbl.hidden = false;
    highscorenametxt.hidden = false;
    lblhighscorename.hidden = false;   
    savebtn.removeAttribute("hidden", "");

    if (correct > 0){
        cpercent = (correct/10) * 100
        resultslbl.innerText =  'You scored ' + cpercent + ' percent'
        lblhighscorename.innerText = "Please enter in your initals"
        
    } else {
        cpercent = 0
        resultslbl.innerText = 'You scored ' + 0 + ' percent'
        lblhighscorename.innerText = "Please enter in your initals"
        
    }      
}

function question1 () {
    qcount = 1
    questionid.innerText = "Question 1: What does DOM stand for?"

    answerid1.innerText = " A - Document Object Model"
    answerid2.innerText = " B - Digital Object Media"
    answerid3.innerText = " C - Down on Mode"
    answerid4.innerText = " D - Direct override Mode"

}

function question2 () {
    qcount = 2
    questionid.innerText = "Question 2: What does API stand for?"

    answerid1.innerText = " A - Apple Person ID"
    answerid2.innerText = " B - Application progamming interfaces"
    answerid3.innerText = " C - Applied Interface"
    answerid4.innerText = " D - Accept Partail ID"

}

function question3 () {
    qcount = 3
    questionid.innerText = "Question 3: What does JS stand for?"

    answerid1.innerText = " A - Java"
    answerid2.innerText = " B - Java Save"
    answerid3.innerText = " C - Javascript"
    answerid4.innerText = " D - Java or Javascript"

}

function question4 () {
    qcount = 4
    questionid.innerText = "Question 4: If you have a element <p> how can you select them in JS?"

    answerid1.innerText = " A - queryselect('p')"
    answerid2.innerText = " B - doc.queryselect('p')"
    answerid3.innerText = " C - document.queryselectID('p')"
    answerid4.innerText = " D - document.queryselectorALL('p')"

}

function question5 () {
    qcount = 5
    questionid.innerText = "Question 5: How do you get a element by ID with ID of lastname?"

    answerid1.innerText = " A - document.getelementbyID('lastname')"
    answerid2.innerText = " B - document.queryselectorALL('lastname')"
    answerid3.innerText = " C - document.getelementbyID('lname')"
    answerid4.innerText = " D - getelementbyID('lastname')"

}

function question6 () {
    qcount = 6
    questionid.innerText = "Question 6: What command allows you to store a key in local storage?"

    answerid1.innerText = " A - setitem"
    answerid2.innerText = " B - localStorage.setItem"
    answerid3.innerText = " C - local.setitem"
    answerid4.innerText = " D - localstorate.getItem"

}

function question7 () {
    qcount = 7
    questionid.innerText = "Question 7: What command allows you to get a key from local storage?"

    answerid1.innerText = " A - localstorage.setitem"
    answerid2.innerText = " B - storage.getitem"
    answerid3.innerText = " C - localStorage.getItem"
    answerid4.innerText = " D - storage.get.Item"

}

function question8 () {
    qcount = 8
    questionid.innerText = "Question 8: What one allows you to set the button name to Start Game?"

    answerid1.innerText = " A - button.name(Start Game)"
    answerid2.innerText = " B - btn.name('Start')"
    answerid3.innerText = " C - Button.Set('Name', 'Start Game'"
    answerid4.innerText = " D - button.setAttribute('name', 'Start Game')"

}

function question9 () {
    qcount = 9
    questionid.innerText = "Question 9: What one allows you to create a div element?"

    answerid1.innerText = " A - document.createElement('div')"
    answerid2.innerText = " B - $(div)"
    answerid3.innerText = " C - doc.create('div')"
    answerid4.innerText = " D - documents.create('div')"

}

function question10 () {
    qcount = 10
    questionid.innerText = "Question 10: What do you use to call a function from a button click?"

    answerid1.innerText = " A - function()"
    answerid2.innerText = " B - button.AddEventListner('click' , function(e))"
    answerid3.innerText = " C - fucntion button()"
    answerid4.innerText = " D - function button.Addlisterner('Click')"

}


document.addEventListener("keydown", function(event) {

    if (timectbdown === 0) {
      return;
    }
    var key = event.key.toLowerCase();
    var answerpicked = event.key;
 
    if (qcount > 0 && qcount < 11){

 
        if (qcount == 1){
            if (answerpicked == "a"){
                correct++;
                question2();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question2();
            }

        }else if(qcount == 2){
            if (answerpicked == "b"){
                correct++;
                question3();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question3();
            }

        }else if(qcount == 3){
            if (answerpicked == "c"){
                correct++;
                question4();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question4();
            }

        }else if(qcount == 4){
            if (answerpicked == "d"){
                correct++;
                question5();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question5();
            }

        } else if(qcount == 5){
            if (answerpicked == "a"){
                correct++;
                question6();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question6();
            }

        } else if(qcount == 6){
            if (answerpicked == "b"){
                correct++;
                question7();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question7();
            }

        } else if(qcount == 7){
            if (answerpicked == "c"){
                correct++;
                question8();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question8();
            }

        } else if(qcount == 8){
            if (answerpicked == "d"){
                correct++;
                question9();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question9();
            }

        } else if(qcount == 9){
            if (answerpicked == "a"){
                correct++;
                question10();
            }else {
                timectbdown = timectbdown - 10;
                wrong++;
                question10();
            }

        } else if(qcount == 10){
            if (answerpicked == "b"){
                qcount = 11
                correct++;
                showresults();
            }else {
                qcount = 11
                wrong++;
                showresults();
            }

        } 
    }
  });

init()

startbtn.addEventListener("click", startquiz)

savebtn.addEventListener("click", savehighscore)

function savehighscore(){
quizattempts++

const scores = [{score: cpercent, name: highscorenametxt.value, row: quizattempts}]
const existingData = localStorage.getItem("scores");
const parsedData = JSON.parse(existingData);
const updatedData = parsedData ? [...parsedData, ...scores] : scores;
const updatedDataString = JSON.stringify(updatedData);

 localStorage.setItem("scores", updatedDataString);  

 resultslbl.innerText =  'You scored has been saved !!!'
 resultslbl.style.backgroundColor = "white"
 resultslbl.style.color = "red"

 highscorenametxt.hidden = true;
 lblhighscorename.hidden = true;
 savebtn.setAttribute("hidden", true);

 startbtn.removeAttribute("hidden", "");

}

