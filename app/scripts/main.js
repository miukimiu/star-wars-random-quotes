document.addEventListener('DOMContentLoaded', function(){
    var quotes = 
	[{
		quote: "When 900 years old, you reach… Look as good, you will not.",
		character: "Yoda",
		force: "good"
	}, {
		quote: "The Dark Side of the Force is the pathway to many abilities some consider to be… Unnatural.",
		character: "Senator Palpatine",
		force: "bad"
	}, {
		quote: "You don’t know how hard I found it, signing the order to terminate your life",
		character: "Governor ‘Grand Moff’ Tarkin",
		force: "good"
	}, {
		quote: "He’s holding a thermal detonator!",
		character: "C-3PO",
		force: "good"
	}, {
		quote: "I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.",
		character: "Count Dooku",
		force: "bad"
	}, {
		quote: "Great, kid. Don’t get cocky",
		character: "Han Solo",
		force: "good"
	}, {
		quote: "Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.",
		character: "Darth Vader",
		force: "bad"
	}, {
		quote: "You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.",
		character: "Obi Wan Kenobi",
		force: "good"
	},  {
		quote: "Aren't you a little short for a storm trooper?",
		character: "Princess Leia",
		force: "good"
	}, {
		quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
		character: "Princess Leia",
		force: "good"
	}, {
		quote: "Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.",
		character: "Yoda",
		force: "good"
	}, {
		quote: "Lando’s not a system he’s a man!",
		character: "Han Solo",
		force: "good"
	}, {
		quote: "These aren’t the droids you’re looking for...",
		character: "Obi Wan Kenobi",
		force: "good"
	}];

	// helper functions
	function hasClass(el, className) {
	    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
	}

	function addClass(el, className) {
	    if (el.classList) el.classList.add(className);
	    else if (!hasClass(el, className)) el.className += ' ' + className;
	}
	function removeClass(el, className) {
	    if (el.classList) el.classList.remove(className);
	    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
	}


	function getQuote() {

		var random = Math.floor( Math.random() * quotes.length),
			quoteResult = quotes[random].quote,
			characterResult = quotes[random].character,
			force = quotes[random].force;	

		var saberLight = document.getElementById("saber__light");

		console.log('class: ' + saberLight);


		if (force === "good") {
			if (hasClass(saberLight, 'force-bad')) removeClass(saberLight, 'force-bad');
			addClass(saberLight, 'force-good');
			
		

		} else {
			if (hasClass(saberLight, 'force-good')) removeClass(saberLight, 'force-good');
			addClass(saberLight, 'force-bad');

		}
		document.getElementById("quote").innerHTML = quoteResult;
		document.getElementById("character").innerHTML = characterResult;

	}

	var button = document.getElementById("quoteButton");


    button.addEventListener("click",function(){
	    getQuote();

	});

});
			