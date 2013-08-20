/*
 * Arabica-Less
 *
 * Copyright (c) 2013 Tiago Amaro
 * Licensed under the MIT license.
 */

 module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: 'src/css',
          compress: true,
          ieCompat: true
        },
        files: {
          'build/css/less_result.css': 'src/**/*.less'
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'src/coffee_ready/js/coffee_result.js': 'src/**/*.coffee'
        }
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'spec/coffee',
        src: ['*.coffee'],
        dest: 'spec/coffee_ready',
        ext: '.js'
      }
    },
    uglify: {
      options: {        
        mangle: {
          except: ['jQuery']
        },
        compress: true,
        preserveComments: false
      },
      build: {
        src: ['src/**/*.js'],
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      default: {
        files: ['src/**/*.js', 'src/**/*.coffee', 'src/**/*.less'],
        tasks: ['default']
      }
    },
    clean: {
      project: ['build', '.sass-cache', '.grunt', 'src/coffee_ready'],
      spec: ['spec/coffee_ready', '_SpecRunner.html']
    }
  });

  // Loading plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['coffee', 'uglify', 'less']);
};