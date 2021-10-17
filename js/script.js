
var arr=["Rock","Paper","Scissors" ];
var i= Math.floor(Math.random() * arr.length);  


function randomChoice(arr){
window.inp2.value = arr[i];
}

 
function butnRock(){
window.inp1.value='Rock';
randomChoice(arr);
butnRockall();

}


function butnPaper(){
window.inp1.value='Paper';
randomChoice(arr);
butnPaperall();

}


function butnScissors(){
window.inp1.value='Scissors';
randomChoice(arr);
butnScissorsall();

}

///////////////////////////////////////////////////////////////

function butnRockall(){
if("Rock" == arr[i]){
  window.inp3.value="Equivalent" ;
}
else if("Rock" < arr[i]){
window.inp3.value="you winner";
}
else{
window.inp3.value="you lost" ;
}

}

/////////////////////////////////////////////////////////////////

function butnPaperall(){
if("Paper" == arr[i]){
  window.inp3.value="Equivalent" ;
}
else if("Paper"<arr[i]){
	if(arr[i]!="Scissors"){
window.inp3.value="you winner";
}

else{
window.inp3.value="you lost" ;
}
}
}

////////////////////////////////////////////////////////////////

function butnScissorsall(){
if("Scissors" == arr[i]){
  window.inp3.value="Equivalent" ;
}
else if("Scissors"> arr[i]){
	if(arr[i]!="Rock"){
window.inp3.value="you winner";

}
else{
window.inp3.value="you lost" ;
}
}
}

/////////////////////////////////////////////////////////////////








