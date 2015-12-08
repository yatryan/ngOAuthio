module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var jshintrc = grunt.file.readJSON('.jshintrc');

    grunt.initConfig({
        cmpnt: grunt.file.readJSON('bower.json'),

        banner: '/*! ngOAuthio v<%= cmpnt.version %> by Taylor Ryan (spiketmr@gmail.com) - ' +
            'http://github.com/yatryan/ngOAuthio - MIT License */\n',

        jshint: {
            files: ['Gruntfile.js', 'karma.conf.js', 'src/**.js', 'test/**.js'],
            options: {
                globals: jshintrc
            }
        },

        clean: ["dest/"],

        copy: {
            js: {
                src: 'src/ng-oauthio.js',
                dest: 'dist/ng-oauthio.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                runnerPort: 8888,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        },

        uglify: {
            js: {
                src: ['src/ng-oauthio.js'],
                dest: 'dist/ng-oauthio.min.js',
                options: {
                    banner: '<%= banner %>',
                    sourceMap: function (fileName) {
                        return fileName.replace(/$/, '.map');
                    }
                }
            }
        }
    });
    grunt.registerTask('build', ['clean', 'jshint', 'karma', 'copy', 'uglify']);
    grunt.registerTask('default', ['build']);
};
