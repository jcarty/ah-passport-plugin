#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var srcFile   = path.normalize(__dirname + '/../config/ah-passport-plugin-config.js');
var destFile = path.normalize(process.cwd() + '/../../config/plugins/ah-passport-plugin-config.js');

mkdirp.sync(path.normalize(process.cwd() + '/../../config/plugins'));

if(!fs.existsSync(destFile)) {
  console.log("Copying " + srcFile + " to " + destFile);
  fs.createReadStream(srcFile).pipe(fs.createWriteStream(destFile));
}