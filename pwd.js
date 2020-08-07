const pwd = function(cmd) {
    if(cmd.toLowerCase() === 'pwd'){
        process.stdout.write(__dirname);
        process.stdout.write('\nprompt > ');
    } 
}
module.exports = pwd;