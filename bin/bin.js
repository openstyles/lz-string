#! /usr/bin/env node
var lzString = require('../lz-string-unsafe.js');
var fs = require('fs');

if (process.argv.length < 3) {
  console.error('Usage: lz-string-unsafe <input_file>');
  process.exit(1);
}

console.log(LZStringUnsafe.compress(fs.readFileSync(process.argv[2], {
  encoding: 'utf8',
})));
