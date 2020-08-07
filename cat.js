const fs = require('fs');
const cat = function (cmd) {
	if (cmd.toLowerCase().slice(0, 3) === 'cat') {
		let fileName = cmd.slice(4);
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			else {
				process.stdout.write(data);
				process.stdout.write('\nprompt > ');
			}
		});
	}
};
module.exports = cat;
