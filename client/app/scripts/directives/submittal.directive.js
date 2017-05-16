(function () {
	'use strict';
    submittal.$inject = [];
    function submittal() {
    	return {
        	restrict: 'E',
            templateUrl: 'views/submittalPage.html',
            link: function (scope) {
    			console.log('this directive works');
    		}
    	}
    }
    angular.module('clientApp').directive('submittal', submittal);
})();
