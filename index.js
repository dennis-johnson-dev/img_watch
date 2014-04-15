var watch = require('node-watch');
var fs = require('fs');
var path = require('path');
var walk = require('walk');
		
// Only look at the images
var fileCodes = /.jpg|.JPG|.png|.jpeg|.JPEG/;

// Regex codes you want to find and replace
var picCodes = /PLU|ARS|COM|EL|HEAT|HM|INS|JAN|PST|TL|A\:C/;

module.exports = function(origin_folder) {

	watch(origin_folder, function(filename) {
		var walker = walk.walk(filename);
		walker.on('file', function(root, stat, next) {
		var folder = root.split(path.sep);

		// only test the image files
		if (fileCodes.test(stat.name)) {
			// test to see if the filename contains these image code prefixes
			if (picCodes.test(stat.name)) {

				// Rename the bad image file to _junk.jpg
				fs.renameSync(root + '/' + stat.name, root + '/' + '_junk.jpg')

				// Get current Date
				var time = new Date();

				// Log the change
				console.log(time.toDateString() + ' ' + time.toTimeString() + '\n' + root + ' was changed...\n');
				}
			} 
		next();
		});
	});
}
