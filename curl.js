const request = require('request');

const curl = function (cmd) {
    if (cmd.toLowerCase().slice(0, 4) === 'curl') {
        let url = cmd.slice(5);
        request(url, (error, response, body) => {
            if (error) throw error;
            else {
                process.stdout.write(body);
                process.stdout.write('\nprompt > ');
            } 
        });
    }
}
module.exports = curl;

// const fs = require('fs');
// const cat = function (cmd) {
// 	if (cmd.toLowerCase().slice(0, 3) === 'cat') {
// 		let fileName = cmd.slice(4);
// 		fs.readFile(fileName, (err, data) => {
// 			if (err) throw err;
// 			else {
// 				process.stdout.write(data);
// 				process.stdout.write('\nprompt > ');
// 			}
// 		});
// 	}
// };
// module.exports = cat;
