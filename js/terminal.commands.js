function startKTerminal() {
	var id = 1;
	$('body').terminal(function(command, term) {
		if (command == 'help') {
			term.echo("Available commands are list, get, version");
			term.echo('Run the help command in an application to get more information.');
		} else if (command == 'list'){
			term.push(function(command, term) {
				if (command == 'help') {
					term.echo('list');
					term.echo('Version 1.0');
					term.echo('Lists every available file.');
					term.echo('You can type:');
					term.echo('				 > albums (lists all albums)');
					term.echo('				 > singles (lists all singles)');
					term.echo('				 > help (prints this help)');
					term.echo(' ');
					term.echo('Press CTRL+D to quit.');
					term.echo(' ');
				} else if (command == 'version') {
					term.echo('K40S\' Terminal');
					term.echo('Version 0.3b1');
					term.echo('This is the official website of K40S.');
					term.echo('Here you can download every album and single by K40S');
					term.echo('for the price you set. You can even grab all the stuff');
					term.echo('for free, but please consider making a donation.');
				} else if (command == 'albums') {
					term.echo('Spacewalk.tar.gz');
				} else if (command == 'singles') {
					term.echo('Pioneer.flac');
					term.echo('Hashes.flac');
					term.echo('Struu.flac');
					term.echo('Rose.flac');
					term.echo('Supernova.flac');
					term.echo('Ezekiel.flac');
					term.echo('Dawn Of The Ganja Queen.flac');
					term.echo('Green Kingdom.flac');
				} else {
					term.echo('unknown command ' + command);
				}
			}, {
				prompt: 'list> ',
				name: 'list'});
		} else if (command.substring(0, 3) == "get"){
			url = command.substring(4);
			if (url == 'help'){
				term.echo('get');
				term.echo('Version 1.0')
				term.echo('Append the name of the file you want (ex. \'get pioneer.flac\') to download it.');
			}
			else if (url == '') {
				term.echo('get');
				term.echo('Version 1.0')
				term.echo('Append the name of the file you want (ex. \'get pioneer.flac\') to download it.');
				term.echo('Append \'help\' to get help.');
			}
			else {
				window.location.href = 'download/' + url;				
			} 
		} else if (command == "version") {
			term.echo('K40S\' Terminal');
			term.echo('Version 0.3.1b4');
			term.echo('This is the official Website of K40S.');
			term.echo('Here you can download every piece of music');
			term.echo('I\'ve ever made. You set the price. Grab it');
			term.echo('for free if you want, but please consider making');
			term.echo('a donation.');
		} else {
			term.echo("unknown command " + command);
		}
	}, {
		greetings: "Welcome to my Website.\nIt would be very helpful for you to be able to use a Unix terminal. If you're unfamiliar with a terminal please type 'help' to get a list of the available commands.",
		onBlur: function() {
			// prevent loosing focus
			return false;
		}
	});
}
