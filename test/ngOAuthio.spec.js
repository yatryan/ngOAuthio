describe("OAuth.io Provider test", function() {

    var provider;

    beforeEach(module('ngOAuthio', function(OAuthProvider) {
        provider = OAuthProvider;
    }));

    it('tests the providers init function', inject(function() {
        expect(provider.hasOwnProperty('initialize')).toBeDefined();
    }));

    it('tests the providers $get function', inject(function() {
        expect(provider.$get()).toEqual({});
    }));
});
