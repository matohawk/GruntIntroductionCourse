module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/lib/angular.min.js', 'js/app.js', 'js/controllers/mainController.js'],
                dest: 'js/built.js'
            },
            dev: {
                src: ['js/lib/angular.min.js', 'js/app.js', 'js/controllers/mainController.js'],
                dest: 'js/built.js'
            }
        },
        compass: {
            dist: {
                options: {
                    cssDir: 'css',
                    sassDir: 'css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    cssDir: 'css',
                    sassDir: 'css'
                }
            }
        },
        watch: {
            files: ['css/lib/*.scss'],
            tasks: ['compass:dist']
        }
    });

    // Load the plugin that provides the "concatenate" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concat:dist', 'compass:dist']);
    grunt.registerTask('dev', ['concat:dev', 'compass:dev']);
    grunt.registerTask('qa', ['concat:dist', 'compass:dist']);
    grunt.registerTask('prod', ['concat:dist', 'compass:dist']);

};