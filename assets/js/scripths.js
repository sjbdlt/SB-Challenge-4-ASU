var result1 = document.getElementById("Top1");
var result2 = document.getElementById("Top2");
var result3 = document.getElementById("Top3");
var result4 = document.getElementById("Top4");
var result5 = document.getElementById("Top5");
var result6 = document.getElementById("Top6");
var result7 = document.getElementById("Top7");
var result8 = document.getElementById("Top8");
var result9 = document.getElementById("Top9");
var result10 = document.getElementById("Top10");
var btngoback = document.getElementById("goback");
var btnclearhs = document.getElementById("clearhs");
var resultslbl = document.getElementById("lblresults");


function init(){
    gethighscore();
}

function gethighscore(){

const storedArray = localStorage.getItem('scores');



const myArray = storedArray ? JSON.parse(storedArray) : [];

myArray.sort((a, b) => {
    const scoresa = a.score
    const scoresb = b.score


    return scoresb - scoresa; 
});

const hslist = document.getElementById('highlist');

// Loop through the array and create a list item for each item
myArray.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item.name + ' ' + item.score;
  hslist.appendChild(listItem);
});

}



function clearhscore(){
    localStorage.clear()
    resultslbl.innerText =  'Scors have been cleared'
    resultslbl.style.backgroundColor = "white"
    resultslbl.style.color = "red"
}


btnclearhs.addEventListener("click", clearhscore)

init()