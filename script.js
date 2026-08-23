const startBtn = document.getElementById("startBtn");
const usernameInput = document.getElementById("username");
const StartScreen = document.getElementById("StartScreen");
const fortuneScreen = document.getElementById("fortuneScreen");
const fortuneBtn = document.getElementById("fortuneBtn");
const fortuneText = document.getElementById("fortuneText");
const fortunePaper = document.querySelector(".fortune-paper");

let username = "";

const fortunes = [
    "{name}, keep going. You're closer than you think!",
    "{name}, finish strong. Your hard work matters.",
    "{name}, great things take time.",
    "{name}, you make a difference every day.",
    "{name}, today is another chance to shine!",
    "{name}, your next success is just around the corner.",
    "{name}, believe in yourself. We've got this!",
    "{name}, every small win counts!",
	"{name}, smile when you are lonely, it will soon go away.",
	"{name}, keep your eyes open. You might miss a miracle.",
	"{name}, plan for the future, but live in the present.",
	"{name}, don’t hold onto things that require a tight grip.",
	"{name}, do it scared.",
	"{name}, be careful who you trust. Salt and sugar look the same.",
	"{name}, don't let yesterday take up too much of today.",
	"{name}, do not let making a living prevent you from making a life.",
	"{name}, always do your best. What you plant now, you will harvest later.",
	"{name}, there is always something left to love.",
	"{name}, breathe, this is just a chapter, not your whole story.",
	"{name}, try and fail, but never fail to try.",
	"{name}, take the first step in faith. You don't need to see the whole staircase just the first step.",
	"{name}, you are loved.",
	"{name}, God will never give you anything you can't handle, so don't stress.",
	"{name}, no one is you and that is your superpower.",
	"{name}, adjust, chill out, and be happy.",
	"{name}, let go and let the flow.",
	"{name}, make more time for things that matter.",
	"{name}, you are not a problem that needs solving.",
	"{name}, stop letting your head talk your heart out of it.",
	"{name}, you only live once, but if you do it right, once is enough.",
	"{name}, everything you do is your life's work.",
	"{name}, don't let anybody steal your inner sparkle."
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
