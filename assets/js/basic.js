$( document ).ready(function() {

var panel = $('#question-box'); /*id="quiz-area" in solution*/

// Declares variable for timer.
// Sets timer to 30 seconds at the beginning:
var countStartNumber = 30;

// CLICK EVENTS

// Resets the game from the beginning when #start-over button is clicked:
$(document).on('click', '#start-over', function(e) {
	game.reset();
});

// What exactly does this do?
$(document).on('click', '.answer-button', function(e) {
	game.clicked(e);
})

// When #start is clicked, the first question is displayed.
$(document).on('click', '#start', function(e) {
	// DID MY OWN VERSION OF THIS -- MAY NOT WORK RIGHT.
	$('#timer').append('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
	game.loadQuestion();
})


// TRIVIA QUESTIONS

// Declare a variable called "questions".
	// Stored inside the variable is an array.
		// Each value inside the array is an object.
			// Each of these objects has the properties question, answer, correct answer, and image.
				// The property "answers" has a value that is ANOTHER array.
					// Each value inside this array is one of the multiple choice answers.
var questions = [{ /*var used to be "questionsToPick*/
		question:	"Homer\'s supervillain boss was named...",
		answers: [
			"Ernst Stavro Blofeld",
			"Auric Butterfinger",
			"Dr. Yes",
			"Hank Scorpio"
		],
		correctAnswer: "Hank Scorpio",
		picture: "../images/hank_scorpio_posing.jpg"
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
		picture: "../images/ned_flanders_asylum.jpg"
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
		picture: "../images/nuclear_inspection_simulator_van.png"
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
		picture: "../images/choo_choo_choose_you.png"
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
		picture: "../images/homer_drunk_driving.jpg"
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
		picture: "../images/homer_simpson_taxes.jpg"
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
		picture: "../images/krustys_clown_college_billboard.png"
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
		picture: "../images/lost_our_lisa.png"
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
		picture: "../images/count_homer.jpg"
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
		picture: "../images/bonestorm.jpg"
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
		picture: "../images/wiggum_pepper.jpg"
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
		picture: "../images/stonecutters.png"
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
		picture: "../images/perpetual_motion_machine.jpg"
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
		picture: "../images/pyro_and_gyro.png"
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
		picture: "../images/king_size_homer.png"
	},
	
	{
		question: "At which store did Homer purchase a gun?",
		answers: [
			"Guns \"R\" Us.",
			"Bloodbath and Beyond.",
			"Lionel Hutz\'s Discount Gun Emporium.",
			"Target (with a human silhouette logo instead of a round target)."
		],
		picture: "../images/bloodbath_and_beyond.png"
	}	
];


// GAME (ENTIRE GAME IS AN OBJECT STORED INSIDE A VARIABLE):

var game = {
	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,
	
	countdown: function() {
		game.counter--; /*Decrements game ounter by one.*/
		$('#counter-number').html(game.counter);

		// When timer reaches zero, game is over.
		if (game.counter === 0) {
			console.log('TIME UP');
			game.timeUp();
		}
	}, /*Close Countdown*/

	loadQuestion: function() {
		// Sets timer to countdown in intervals of 1 second:
		timer = setInterval(game.countdown, 1000);
		panel.html('<h2>' + 
			questions[this.currentQuestion].question + 
			'</h2>');
		// For loop to create a button for each multiple choice answer:
		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append(
				'<button class="answer-button" id="button"' + 
				'data-name="' + 
				questions[this.currentQuestion].answers[i] + 
				'">' + 
				questions[this.currentQuestion].answers[i] + 
				'</button>');
		}
	}, /*Close loadQuestion*/

	nextQuestion: function() {
		game.counter = countStartNumber;
		$('#counter-number').html(game.counter);
		game.currentQuestion++; /*advance to next question in array.*/
		game.loadQuestion();
	}, /*Close nextQuestion*/

	timeUp: function() {
		clearInterval(timer);
		$('#counter-number').html(game.counter);

		// Changes the PANEL to display TIME UP info:
		panel.html('<h2>Out of Time!</h2>');
		panel.append('<h3>The Correct Answer Was: ' + 
			questions[this.currentQuestion].correctAnswer);
		panel.append('<img src="' + 
			questions[this.currentQuestion].picture + 
			'" />');

		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000);
		} else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	}, /*Close timeUp*/

	results: function() {
		clearInterval(timer);

		panel.html('<h2>Good work! Here are your scores:</h2>');
		$('#counter-number').html(game.counter);
		panel.append('<h3>Correct: ' + game.correct + '</h3>');
		panel.append('<h3>Incorrect: ' + game.incorrect + '</h3>');
		// Adds the correct and incorrect totals, and subtracts that from the total number of questions:
		panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
		panel.append('<br><button id="start-over">Now that you know all the answers, want to play again?</button>');
	},

	// What is function(e)?
	clicked: function(e) {
		clearInterval(timer);

		if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
			this.answeredCorrectly();
		} else {
			this.answeredIncorrectly();
		}
	},

	answeredIncorrectly: function() {
		game.incorrect++;
		clearInterval(timer);
		panel.html('<h2>D\'oh!</h2>');
		panel.append('<h3>I probably shouldn\'t tell you this, but the correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
		panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000);
		} else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},

	answeredCorrectly: function() {
		clearInterval(timer);
		game.correct++;
		panel.html('<h2>WOO-HOO!!!</h2>');
		panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

		// Checks to see if you've reached the last question:
		if (game.currentQuestion === questions.length - 1) {
			// If you have:
			setTimeout(game.results, 3 * 1000);
		} else {
			// If you have not, go to the next question:
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},

	reset: function() {
		this.currentQuestion = 0;
		this.counter = countStartNumber;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestion();
	}
};