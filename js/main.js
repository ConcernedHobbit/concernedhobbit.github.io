/*
	This is so goddamn messy, I'm not even mad if you use it.
	I should really rewrite this soon. Oh well. Future me can do that later.
	
	From future me: Fuck you, past me. Oh well, future me can fix this later.
	From future me: I should really learn from my mistakes. Oh well, future me can fix this soon.
 */

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

var birthdayCake = "<i class='material-icons custom'>cake</i> ";
var birthday = (month == 12 && day == 20) ? true : false;

var canSetRandomSubtitle = true;

function setSubtitle(msg) {
	$('#subtitle').text(
			msg
	);
}

function setRandomSubtitle(array) {
	if (canSetRandomSubtitle) {
		setSubtitle(array[Math.floor(Math.random() * array.length)]);
	}
}

console.log('ohai.');
if (birthday) {
	var currentTitle = $("#title").html();
	$("#title").html(birthdayCake + currentTitle);
	
	setSubtitle("it's my birthday.");
	canSetRandomSubtitle = false;
}

var subtitles = [];

/* Simple weighted propabilities. */
for (var i = 0; i < 79; i++) {
	subtitles.push('hello, mate.');
}

for (var i = 0; i < 10; i++) {
	subtitles.push('hello, null.');
}

for (var i = 0; i < 10; i++) {
	subtitles.push('hello, world.');
}

subtitles.push('wassup, dawg?');


setRandomSubtitle(subtitles);
$('#subtitle').click(function() {
	setRandomSubtitle(subtitles);	
});

var darkTriggers = [['dark', 'night', 'black', 'invert'], 'css/dark.css'];
var testTrigger = [['1337'], 'css/h4x0r.css', 'h3110, m473.'];

var triggers = [darkTriggers, testTrigger];

/* The thing that makes the alternative stylesheets work */
if(window.location.hash) { /* For some reason, this doesn't work on GitHub. MORE CONSOLE.LOG()! */
	var hash = window.location.hash.substring(1);
	console.log("Found hash '%s', checking it against triggers.", hash);
	for (var i = 0; i < triggers.length; i++) {
		if ($.inArray(hash, triggers[i][0]) != -1) {
			console.log('Using stylesheet from %s', triggers[i][1]);
			$("link[rel=stylesheet]").attr('href', triggers[i][1]);
				
			if (triggers[i].length > 2) {
				console.log("Using subtitle '%s'", triggers[i][2])
				setSubtitle(triggers[i][2]);
				canSetRandomSubtitle = false;
			}
			
			break;
		}
	}
}