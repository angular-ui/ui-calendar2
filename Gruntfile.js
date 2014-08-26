/* globals module, require */
'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Declarations:
  var KARMA_JASMINE_OPTIONS = {
    runnerPort: 9999,
    reporters: ['spec'],
    frameworks: ['jasmine'],
    configFile: 'test/karma.conf.js'
  };

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        '*.js',
        'src/**/*.js',
        'test/**/*.js'
      ],
      options: {
          jshintrc: '.jshintrc'
      }
    },

    // Unit tests
    karma: {
      unit: {
        options: KARMA_JASMINE_OPTIONS,
        browsers: ['PhantomJS', 'Chrome']
      },
      all: {
        options: KARMA_JASMINE_OPTIONS,
        browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],
        singleRun: true
      },
      ci: {
        options: KARMA_JASMINE_OPTIONS,
        browsers: ['PhantomJS', 'Firefox'],
        singleRun: true
      }
    }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('test', ['karma:unit']);
};