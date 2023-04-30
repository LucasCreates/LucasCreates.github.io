
const button = document.getElementById("start-btn");
const playerButtons = document.querySelector(".container")
const playerChoiceBtns = document.querySelectorAll(".player-btn")
const playerHandImg = document.querySelector(".player-hand-img");
const computerHandImg = document.querySelector(".computer-hand-img");
const playRound = document.querySelector(".play-round");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0
playerChoiceBtns.forEach((choice) => choice.addEventListener("click", function(e){
	console.log(e.target.getAttribute("data-id"));
	playerChoice = e.target.getAttribute("data-id");
	play()
}));





function play(){

	computerChoice = getComputerChoice(); 
	console.log("Computer picks " + computerChoice)
	playerHandImg.src="images/rock.png";
	playerHandImg.style.transition = "0.5s"
	playerHandImg.style.transform ="translateY(-200px)"
	computerHandImg.src="images/rock2.png";
	computerHandImg.style.transition = "0.5s"
	computerHandImg.style.transform ="translateY(-200px)"
		setTimeout(() =>{
	    	const handAnimation = [
				
				{transform: `translateX(10px`},
				{transform: `translateY(50px`},
				{rotate: `15deg`},
				{rotate: `0deg`},
			];
			const timing = {
				duration: 500,
				iterations:3,
			}
			playerHandImg.animate(handAnimation, timing);
			computerHandImg.animate(handAnimation, timing);
			if(playerChoice == computerChoice){
				setTimeout(() =>{
	    				computerHandImg.src =`images/${computerChoice}2.png`;
	    		}, "1600");
				
				console.log("You drew")
			}
			if(playerChoice === "rock"){
				setTimeout(() =>{
	    			playerHandImg.src="images/rock.png";
	    		}, "1600");
	    		if(playerChoice === "rock" && computerChoice === "paper"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/paper2.png";
	    				console.log("you lose")
	    				computerScore++
	    				computerScoreDisplay.textContent = computerScore
	    			}, "1600");
	    			if(playerChoice === "scissor"){
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}		
	    		}
	    		else if(playerChoice === "rock" && computerChoice === "scissor"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/scissor2.png";
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}, "1600");
	    		}	
			}
			else if(playerChoice === "paper"){
				setTimeout(() =>{
	    			playerHandImg.src="images/paper.png";
	    		}, "1600");
	    		if(playerChoice === "paper" && computerChoice === "scissor"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/scissor2.png";
	    				console.log("you lose")
	    				computerScore++
	    				computerScoreDisplay.textContent = computerScore
	    			}, "1600");	
	    			if(playerChoice === "rock"){
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}	
	    		}
	    		else if(playerChoice === "paper" && computerChoice === "rock"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/rock2.png";
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}, "1600");	
				}
			};



			if(playerChoice === "scissor"){

				setTimeout(() =>{
	    			playerHandImg.src="images/scissor.png";
	    		}, "1600");

	    		if(playerChoice === "scissor" && computerChoice === "rock"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/rock2.png";
	    				console.log("you lose")
	    				computerScore++
	    				computerScoreDisplay.textContent = computerScore
	    			}, "1600");		
	    			if(playerChoice === "paper"){
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}
	    		}
	    		else if(playerChoice === "scissor" && computerChoice === "paper"){
	    			setTimeout(() =>{
	    				computerHandImg.src ="images/paper2.png";
	    				console.log("you win")
	    				playerScore++
	    				playerScoreDisplay.textContent = playerScore
	    			}, "1600");	
	    		}
	    	}

			
			playerHandImg.style.transition = "0.5s"
			playerHandImg.style.transform ="translateY(0px)"
			computerHandImg.style.transition = "0.5s"
			computerHandImg.style.transform ="translateY(0px)"
		
    }, "1600");
	
		
	console.log("You played " + playerChoice)
}

button.addEventListener('click', function(){
	console.log("clicked")
	for(let i = 0; i < 5; i++){
		const star = document.createElement("p");
		const node = document.createTextNode("\u2605")
		star.classList.add("star")
		star.appendChild(node)
		document.body.appendChild(star)

		const starAnimation = [
			{fontSize: `${random(150)}px`},
			{transform: `translateX(${random(400)}px`},
			{transform: `translateY(${random(350)}px`},
			{rotate: `${random(1800)}deg`},
			{opacity: "0.1"}	
				
		];
		const timing = {
			duration: 1200,
			iterations:3,
		}
		star.animate(starAnimation, timing);
	
    		setTimeout(() =>{
    			star.style.display = "none";
    		}, "1000");
		

	}
	start();
	
	
})
function random(num) {return Math.floor(Math.random() * num)} 
console.log(random())

function getComputerChoice(){
	const choice = ["rock", "paper", "scissor"]
	return choice[Math.floor(Math.random() * choice.length)]
}

function start(){
	playerChoice = "";
	const buttonAnimation = [
			{padding: "30px 50px 30px 50px"},
			{opacity: "0.5"},
			{fontSize: "1px"},
			{padding: "0px 0px 0px 0px"},
			{opacity: "0.1"}			
	];
	const timing = {
		duration: 2000,
		iterations:1,
	}
	button.animate(buttonAnimation, timing);
	setTimeout(() =>{
		playerHandImg.style.display = "flex";
		computerHandImg.style.display = "flex";
    
    	button.style.display = "none"
    	playerButtons.style.display ="flex"
    }, "900");
	
}