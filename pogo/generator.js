var rand = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(value);
    return value;
}

var generate = function(generator, mass=false) {
    let controls = generator.getElementsByClassName('controls').item(0);
    let output = generator.getElementsByTagName('output').item(0);

    let inputs = controls.getElementsByTagName('input');
    let min = parseInt(inputs.item(0).value);
    let max = parseInt(inputs.item(1).value);

    let value = rand(min, max)
    output.value = value;

    if (!mass) {
        let uri = generateSharableURI();
        document.getElementById("shareWA").href = uri;
    }

    return value;
}

var generateAll = function() {
    var generators = document.getElementsByClassName('generator');
    for (let generator of generators) {
        generate(generator, true);
    }

    let uri = generateSharableURI();
    document.getElementById("shareWA").href = uri;
}

var generateSharableURI = function() {
    var generators = document.getElementsByClassName('generator');

    let leagues = [];

    for (let generator of generators) {
        let league = generator.getElementsByTagName('h3').item(0).innerText;
        let cp = generator.getElementsByTagName('output').item(0).value;

        leagues.push([league, cp]);
    }

    let str = "https://api.whatsapp.com/send?text=";

    for (let league of leagues) {
        let name = league[0];
        let cp = league[1];

        str += name + ": CP " + cp + "\r\n";
    }

    return encodeURI(str);
}

var generateButtons = document.getElementsByClassName('generate');

for (let button of generateButtons) {
    button.addEventListener('click', function(evt) {
        generate(evt.path[2]);
    });
}

const minTenCPTriggers = ['0', '10', 'low', 'min'];

if(window.location.hash) {
	var hash = window.location.hash.substring(1);
	
    if (minTenCPTriggers.indexOf(hash) > -1) {
        let minimums = document.getElementsByClassName('minimum');
        
        for (let min of minimums) {
            min.value = 10;
        }
    }
}