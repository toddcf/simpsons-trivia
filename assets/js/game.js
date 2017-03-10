// GLOBAL VARIABLES

// Game is defaulted to inactive until player clicks start button:
var active			= false;
// Scores set to zero for beginning of game:
var correctScore	= 0;
var incorrectScore	= 0;
// Countdown timers:
var questionTimer	= 60000; /*60 seconds*/
var answerTimer		= 5000; /*5 seconds*/

// TRIVIA QUESTIONS
var questionArray = [{
		question:	"Homer\'s supervillain boss was named...",
		answers: [
			"Ernst Stavro Blofeld",
			"Auric Butterfinger",
			"Dr. Yes",
			"Hank Scorpio"
		],
		correctAnswer: "Hank Scorpio",
		picture: "../img/hank_scorpio_posing.jpg"
	},

	{
		question: "Why did Ned Flanders check himself into a mental hospital?",
		answers: [
			"A tornado hit Springfield and destroyed ONLY his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
			"His wife died after being knocked off the back of the stadium bleachers at the Springfield Speedway by several T-shirt cannons.",
			"Soon after investing all his money in opening a store of left-handed items (\"The Leftorium\"), a rare medical condition caused Flanders to become right-handed.",
			"He thought it was the Christian thing to do."
		],
		correctAnswer: "A tornado hit Springfield and destroyed ONLY his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
		picture: "../img/ned_flanders_asylum.jpg"
	},

	{
		question:	"Why did Homer have to go \"back\" to college?",
		answers: [
			"He won a mandatory scholarship from a radio call-in show on KBBT.",
			"He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
			"He had an old score to settle with his archnemesis, the Dean of Students.",
			"It was one of the terms of his parole."
		],
		correctAnswer: "He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
		picture: "../img/nuclear_inspection_simulator_van.png"
	},

	{
		question: "What did Lisa\'s Valentine\'s Day card to Ralph Wiggum say?",
		answers: [
			"\"I choo-choo-choose you,\" with a picture of a train.",
			"\"My heart apes for you,\" with a picture of an ape.",
			"\"Generic Platonic Holiday Card,\" with no picture at all.",
			"\"You'll do.\""
		],
		correctAnswer: "\"I choo-choo-choose you,\" with a picture of a train.",
		picture: "../img/choo_choo_choose_you.png"
	},

	{
		question: "Why did all the kids in Springfield get put on a citywide curfew?",
		answers: [
			"Bart drove a tractor through the school while blasting Alice Cooper\'s \"School’s Out.\"",
			"Bart wore a MAD Magazine \"Down With Homework\" T-shirt that sparked a school riot.",
			"Homer and his drunken friends trashed the elementary school, and everyone assumed it was done by child vandals.",
			"The kids got put on curfew for breaking curfew."
		],
		correctAnswer: "Homer and his drunken friends trashed the elementary school, and everyone assumed it was done by child vandals.",
		picture: "../img/homer_drunk_driving.jpg"
	},

	{
		question: "What deductions did Homer claim on his taxes?",
		answers: [
			"Marge requires twenty-four hour nursing care.",
			"Lisa\'s a clergyman.",
			"Maggie is seven people.",
			"Bart was wounded in Vietnam.",
			"All of these."
		],
		correctAnswer: "All of these.",
		picture: "../img/homer_simpson_taxes.jpg"
	},

	{
		question: "What gave Homer the idea to go to clown college?",
		answers: [
			"He was reading billboards on \"new billboard day\" and saw Krusty the Klown\'s advertisement.",
			"Barney Gumble woke up from a drunken blackout with a diploma from Krusty\'s Clown College.",
			"He received a recorded phone message from Krusty the Klown\'s AT-5000 auto-dialer.",
			"His coworkers (Lenny and Carl) dared him to after Mr. Burns said he would fund any employee’s education."
		],
		correctAnswer: "He was reading billboards on \"new billboard day\" and saw Krusty the Klown\'s advertisement.",
		picture: "../img/krustys_clown_college_billboard.png"
	},

	{
		question: "How did Homer make it up to Lisa after Bart glued a bunch of novelty items to his face and caused her to miss an event she was really looking forward to?",
		answers: [
			"He suffered through a vegetarian meal with her.",
			"He helped her break into a museum.",
			"He didn\'t parent her for twenty-four hours.",
			"He bought her a lemur."
		],
		correctAnswer: "He helped her break into a museum.",
		picture: "../img/lost_our_lisa.png"
	},

	{
		question: "How did Homer score coupons to a spa for himself and Marge?",
		answers: [
			"In a raffle while visiting Grandpa at the old folks home.",
			"By posing as \"Count Homer\" and test driving a Bentley.",
			"By selling his spare Christmas tree stand to Ned Flanders at a rip-off rate.",
			"Armed robbery."
		],
		correctAnswer: "By posing as \"Count Homer\" and test driving a Bentley.",
		picture: "../img/count_homer.jpg"
	},

	{
		question: "What video game did Bart try to shoplift?",
		answers: [
			"Touch of Death",
			"Bonestorm",
			"Radioactive Man",
			"Lee Carvallo\'s Putting Challenge"
		],
		correctAnswer: "Bonestorm",
		picture: "../img/bonestorm.jpg"
	},
	
	{
		question: "What did Homer ingest before going on a vision quest?",
		answers: [
			"Guatamalan Insanity Peppers",
			"Shelbyville Shrooms",
			"LSD",
			"Ayahuasca"
		],
		correctAnswer: "Guatamalan Insanity Peppers",
		picture: "../img/wiggum_pepper.jpg"
	},
	
	{
		question: "What secret society did Homer join?",
		answers: [
			"The Moderately-Priced Masons",
			"The Diamond Shredders",
			"The Stonecutters",
			"The Star Killers"
		],
		correctAnswer: "The Stonecutters",
		picture: "../img/stonecutters.png"
	},

	{
		question: "What did Lisa build in her free time while the teachers union was on strike?",
		answers: {
			"A perpetual motion machine.",
			"An AI robot.",
			"A recycling plant.",
			"A Rube Goldberg machine."
		},
		correctAnswer: "A perpetual motion machine.",
		picture: "../img/perpetual_motion_machine.jpg"
	},
	
	{
		question: "After Milhouse\'s parents got divorced, his mother started dating...",
		answers: [
			"Her sewing instructor.",
			"Milhouse\'s dad\'s boss at the cracker factory.",
			"A woman she met at the library.",
			"An American Gladiator named Pyro."
		],
		correctAnswer: "An American Gladiator named Pyro.",
		picture: "../img/pyro_and_gyro.png"
	},

	{
		question: "How did Homer achieve work-from-home status?",
		answers: [
			"He got his weight above 300 pounds and claimed disability.",
			"He won a donut-eating contest at work.",
			"He rigged a security camera to play a loop of him working. (Like in that movie, \"The Bus That Couldn't Slow Down.\")",
			"He won a bet that Mr. Burns couldn’t think of his name."
		],
		correctAnswer: "He got his weight above 300 pounds and claimed disability.",
		picture: "../img/king_size_homer.png"
	},
	
	{
		question: "At which store did Homer purchase a gun?",
		answers: [
			"Guns \"R\" Us.",
			"Bloodbath and Beyond.",
			"Lionel Hutz\'s Discount Gun Emporium.",
			"Target (with a human silhouette logo instead of a round target)."
		],
		picture: "../img/bloodbath_and_beyond.png"
	}	
];


// TEST CODE TO BE DELETED LATER:
	// Push to HTML:
	document.getElementById("question").textContent	= questionArray[0].question;
	document.getElementById("a").textContent		= questionArray[0].answers[0];
	document.getElementById("b").textContent		= questionArray[1].answers[1];
	document.getElementById("c").textContent		= questionArray[2].answers[2];
	document.getElementById("d").textContent		= questionArray[3].answers[3];


// HELPER FUNCTIONS

// What to display when round ends:
var checkAnswer = function() {
	// Hide question.
	// Hide multiple choice answers.
	// If answer was correct && questionTimer > 0:
		correctScore++;
		// "Woo-Hoo!! That's right:"
	// Else (if answer was incorrect || timer ran out):
		incorrectScore++;
		// "D'oh! The correct answer was:"
	// Display correct answer (regardless of whether they answered correctly or not).
	// Display image that accompanies correct answer.
	// Display correctScore.
	// Display incorrectScore.
	// Start (and display) answerTimer. (Only continue after answerTimer reaches 0.)
};


// MAIN PROCESSES
var game = function() {
	// Set game to active:
	active = true;
	// Reset all scores to 0 in case this is a replay:
	correctScore	= 0;
	incorrectScore	= 0;
	
	// Push questions to HTML, one at a time:
	for (var i = 0; i < questionArray.length; i++) {
		// Hide all other text and images at the beginning of each loop.
		// Display "Question " + (indexOf(questionArray[i]) + 1) + " of " + (questionArray.length + 1);
		// Display questionArray[i].question;
		// Display multiple choice answers -- is there a more concise way?
			// Display questionArray[i].answers[0];
			// Display questionArray[i].answers[1];
			// Display questionArray[i].answers[2];
			// Display questionArray[i].answers[3];
		// Start (and display) questionTimer.
		// When questionTimer reaches 0:
		checkAnswer();
		// I THINK THE EVENT HANDLERS BELOW ARE ENOUGH TO DEAL WITH USER CLICKS, AND I SHOULDN'T HAVE TO DEAL WITH THEM HERE?
	}
	// Once the loop has completed, show player their final tallies:
		// Game is now over, so set active to false:
		active = false;
		// Hide everything else in the div.
		// Display correctScore;
		// Display incorrectScore;
		// Calculate percentage right (maybe using Homer math). Include humorous comment.
		// Invite to play again.
};


// EVENT HANDLERS

// When user clicks "Enter Springfield" or "Play Again" to start game:
	game();

// When user clicks an answer:
	// Stop questionTimer.
	checkAnswer();