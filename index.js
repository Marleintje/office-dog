// Insert days that are left for the dog to visit the office

const htmlDaysLeftValueNl = document.getElementById("days-left-nl");
const htmlDaysLeftValueEn = document.getElementById("days-left-en");
const dogDay = new Date("14 Feb 2020");
const today = new Date();
const dogTimeLeftInMS = dogDay - today;
const dogTimeLeftInDays = dogTimeLeftInMS / ( 1000 * 60 * 60 * 24);
const dogTimeLeftInRoundedDays =  Math.ceil(dogTimeLeftInDays);

htmlDaysLeftValueNl && (htmlDaysLeftValueNl.innerHTML = dogTimeLeftInRoundedDays !== 1 ? `Over ${dogTimeLeftInRoundedDays} dagen!` : "Morgen!!");
htmlDaysLeftValueEn && (htmlDaysLeftValueEn.innerHTML = dogTimeLeftInRoundedDays !== 1 ? `In ${dogTimeLeftInRoundedDays} days!` : "Tomorrow!!");

// Randomly display one of three dog images

dogsArray = [
	{
		width: "17rem",
		imageUrl: "https://flinndal.nl/cloud/img/happy-dog_a67ebb22.png"
	},
	{
		width: "22rem",
		imageUrl: "https://flinndal.nl/cloud/img/happy-dog-2_083c02a0.png"
	},
	{
		width: "41rem",
		imageUrl: "https://flinndal.nl/cloud/img/happy-dog-3_3202577e.png"
	},
]

const dogImage = document.getElementById("dog");
const randomIndex = Math.floor((Math.random() * dogsArray.length));

dogImage.src = dogsArray[randomIndex].imageUrl;
dogImage.setAttribute("style", `width:${dogsArray[randomIndex].width}`)
