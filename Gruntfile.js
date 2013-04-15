'use strict';
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    livereload: {
      port: 35729 // Default livereload listening port.
    },
    // Configuration to be run (and then tested)
    regarde: {
      reload: {
        files: ['public/**/*', 'views/**/*'],
        tasks: ['livereload']
      }
    }

  });

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('default', ['livereload-start', 'regarde']);
};
