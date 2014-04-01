// Wrapper for watcher script
var watcher = require('./index.js');
var folder = process.argv[2];

function startUp() {
	var time = new Date();
  console.log('Now scanning...' + time.toDateString() + ' ' + time.toTimeString());
	console.log();
  watcher(folder);
}

startUp();
