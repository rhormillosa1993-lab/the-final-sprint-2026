const startBtn = document.getElementById("startBtn");
const usernameInput = document.getElementById("username");
const StartScreen = document.getElementById("StartScreen");
const fortuneScreen = document.getElementById("fortuneScreen");
const fortuneBtn = document.getElementById("fortuneBtn");
const fortuneText = document.getElementById("fortuneText");
const fortunePaper = document.querySelector(".fortune-paper");

let username = "";

const fortunes = [
    "{name}, Keep going. You're closer than you think!",
    "{name}, Finish strong. Your hard work matters.",
    "{name}, Great things take time.",
    "{name}, You make a difference every day.",
    "{name}, Today is another chance to shine!",
    "{name}, Your next success is just around the corner.",
    "{name}, Believe in yourself. We've got this!",
    "{name}, Every small win counts!",
	"{name}, Smile when you are lonely, it will soon go away.",
	"{name}, Keep your eyes open. You might miss a miracle.",
	"{name}, Plan for the future, but live in the present.",
	"{name}, Don’t hold onto things that require a tight grip.",
	"{name}, Do it scared.",
	"{name}, Be careful who you trust. Salt and sugar look the same.",
	"{name}, Don't let yesterday take up too much of today.",
	"{name}, Do not let making a living prevent you from making a life.",
	"{name}, Always do your best. What you plant now, you will harvest later.",
	"{name}, There is always something left to love.",
	"{name}, Breathe, this is just a chapter, not your whole story.",
	"{name}, Try and fail, but never fail to try.",
	"{name}, Take the first step in faith. You don't need to see the whole staircase just the first step.",
	"{name}, You are loved.",
	"{name}, God will never give you anything you can't handle, so don't stress.",
	"{name}, No one is you and that is your superpower.",
	"{name}, Adjust, chill out, and be happy.",
	"{name}, Let go and let the flow.",
	"{name}, Make more time for things that matter.",
	"{name}, You are not a problem that needs solving.",
	"{name}, Stop letting your head talk your heart out of it.",
	"{name}, You only live once, but if you do it right, once is enough.",
	"{name}, Everything you do is your life's work.",
	"{name}, Don't let anybody steal your inner sparkle."
];

// Show fortune cookie only after entering a name

startBtn.addEventListener("click", () => {
	username = usernameInput.value.trim();
		if (username === "") {
			alert("Please enter your name.");
		return;
		}
		StartScreen.style.display = "none";
		fortuneScreen.style.display = "block";
});



const savedFortune = localStorage.getItem("fortuneMessage");
	if(savedFortune){
	fortuneBtn.disabled = true;
	fortunePaper.textContent = savedFortune;
	fortunePaper.classList.add("show");
	}

fortuneBtn.addEventListener("click", function () {

    
	fortuneBtn.classList.add("opening");
    fortunePaper.textContent = "Opening your fortune...";
	fortunePaper.classList.add("show");

    setTimeout(function(){

        const random = Math.floor(Math.random() * fortunes.length);
		const selectedFortune = fortunes[random] .replace("{name}", username);
		fortunePaper.textContent = selectedFortune;
		fortunePaper.style.opacity = "1";
		fortunePaper.style.color = "black";
		fortunePaper.style.background = "white";
		fortunePaper.style.zIndex = "999";
	
		localStorage.setItem("fortuneMessage", selectedFortune);
			fortuneBtn.disabled = true;
			fortuneBtn.classList.remove("opening");
    },1000);

});