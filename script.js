
//capturing elements
let aiChoices = ["rock","paper","scissors"]
let userChoices = document.querySelectorAll("button");
let Container = document.querySelector(".choices-container")
//functions
const randomIndex = function(){
    return Math.floor(Math.random()*3);
}

const aiChoice = function(){
    return aiChoices[randomIndex()];
}


const winner = function(a,b){
    return(
    a== "paper" && b == "rock" ? "You have lost :(" 
    : a =="paper" && b=="scissors"? "You Won :)"
    : a =="rock" && b=="paper"? "You Won :)"
    : a =="rock" && b=="scissors"?"You have Lost :("
    : a=="scissors" && b=="rock"?"You won :)"
    : a=="scissors" && b=="paper"?"You have lost :)"
    : "Draw");
}   

let myDiv=document.createElement("div");
let mydivEditor = function(a,b,result){
    myDiv.innerHTML = `
<h3>AI Choice Was ${a}</h3>
<h1>${result}</h1>
` ;
}
myDiv.classList.add("result");
Container.insertAdjacentElement('afterbegin',myDiv)




//event listner
userChoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let a = aiChoice();
        let b = choice.getAttribute("data-option")
        let result = winner(a,b);
        mydivEditor(a,b,result);
    })
})