module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["styles"]
                },
                files: {
                    "styles/app.css": "less/app.less",
                },
                cleancss: true
            },
            production: {
                options: {
                    paths: ["styles"],
                    cleancss: true,
                },
                files: {
                    "styles/app.min.css": "less/app.less",
                }
            },
        },
        watch: {
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                } 
            }
        }
    });
  
    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['less']);
    
};