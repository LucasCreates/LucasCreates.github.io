
const button = document.getElementById("start-btn");
const playerButtons = document.querySelector(".container")

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

function starAnimation(){

}
console.log(getComputerChoice())

function start(){
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
    	button.style.display = "none"
    	playerButtons.style.display ="flex"
    }, "900");
	
}