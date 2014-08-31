function startKTerminal() {
	var id = 1;
	$('body').terminal(function(command, term) {
		if (command == 'help') {
			term.echo("Available commands are: list, get, version, donate");
			term.echo('Run an application using help as argument to get more information.');
		} else if (command.substring(0, 4) == "list"){
			query = command.substring(5);
			if (query == 'help') {
				term.echo('list');
				term.echo('Version 2.1');
				term.echo('Lists every available file.');
				term.echo('You can append:');
				term.echo('				 > albums (lists all albums)');
				term.echo('				 > singles (lists all singles)');
				term.echo('				 > help (prints this help)');
				term.echo(' ');
				term.echo(' ');
			} else if (query == 'albums') {
				term.echo('Spacewalk.tar.gz');
			} else if (query == 'singles') {
				term.echo('Pioneer.flac');
				term.echo('Hashes.flac');
				term.echo('Struu.flac');
				term.echo('Rose.flac');
				term.echo('Supernova.flac');
				term.echo('Ezekiel.flac');
				term.echo('Dawn Of The Ganja Queen.flac');
				term.echo('Green Kingdom.flac');
			}
		} else if (command.substring(0, 6) == "donate"){
			arg = command.substring(7);
			if (arg == '-y'){
				var dnt = window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Y8QNG65M2892', '_blank');
				if(dnt){
					//Browser has allowed it to be opened
					dnt.focus();
					term.echo('Opened.');
				}else{
					//Broswer has blocked it
					alert('Please allow popups for this site.');
				}
			}
			else {
				term.echo('donate');
				term.echo('Version 1.0')
				term.echo('Append \'-y\' to open the donation popup.');
				term.echo('Append \'help\' to get help.');
			}
		} else if (command == "version") {
			term.echo('K40S\' Terminal');
			term.echo('Version 0.4b');
			term.echo('This is the official Website of K40S.');
			term.echo('Here you can download every piece of music');
			term.echo('I\'ve ever made. You set the price. Grab it');
			term.echo('for free if you want, but please consider making');
			term.echo('a donation using the donate command.');
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
		} else {
			term.echo("Unknown command: " + command);
		}
	}, {
		greetings: "Welcome to my Website.\nIt would be very helpful for you to be able to use a Unix terminal. If you're unfamiliar with a terminal please type 'help' to get a list of the available commands.",
		onBlur: function() {
			// prevent loosing focus
			return false;
		}
	});
}
