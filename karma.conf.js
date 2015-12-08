module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/oauth-mock.js',
            'src/ng-oauthio.js',
            'test/*.spec.js'
        ],

        reporters: ['progress'],

        autoWatch: true,

        browsers: ['PhantomJS']
    });
};
