var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

var birthdayCake = "<i class='material-icons custom'>cake</i> ";
var birthday = (month == 12 && day == 20) ? true : false;

function setRandomSubtitle(array) {
	if (birthday) {
		$('#subtitle').text(
			"it's my birthday."
		);
	} else {
		$('#subtitle').text(
			array[Math.floor(Math.random() * array.length)]
		);
	}
}

console.log('ohai.');
if (birthday) {
	var currentTitle = $("#title").html();
	$("#title").html(birthdayCake + currentTitle);
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