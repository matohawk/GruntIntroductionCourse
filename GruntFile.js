module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/lib/angular.min.js', 'js/app.js', 'js/controllers/mainController.js'],
                dest: 'js/built.js'
            }
        }
    });

    // Load the plugin that provides the "concatenate" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat:dist']);

};