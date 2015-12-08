(function (OAuth) {
    angular.module('ngOAuthio', [])
        .provider('OAuth', function () {
            this.$get = function () {
                return OAuth;
            };

            this.initialize = function (appKey) {
                OAuth.initialize(appKey);
            };
        });
})(OAuth);
