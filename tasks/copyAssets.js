/*

Copies the assets directory over to /build

*/

var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("copy", "Copy assets directory", function() {
    if (grunt.file.exists("src/assets")) {
      if (!grunt.file.exists("build/assets")) shell.mkdir("-p", "build/assets");
      shell.cp("-r", "src/assets", "build");
    }

    if (grunt.file.exists("src/static")) {
      if (!grunt.file.exists("build/static")) shell.mkdir("-p", "build/static");
      shell.cp("-r", "src/static", "build");
    }
  });

}