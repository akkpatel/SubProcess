    /* jshint ignore:start */
(function () {
	'use strict';
    submittalPage.$inject = [];
    function submittalPage() {
        return {
            restrict: 'E',
            templateUrl: 'views/submittalPage.html',
            link: function (scope) {
            	scope.data = {
            		company: [{
            			id: 1,
            			companyName: 'Charlotee Pipe and Foundry Company'
            		},{
            			id: 2,
            			companyName: 'Rocky Mountain Colby'
            		},{
            			id: 3,
            			companyName: 'JM Eagle'
            		},{
            			id: 4,
            			companyName: 'Cresline'
            		},{
            			id: 5,
            			companyName: 'Home Depot'
            		}],
            		schedule: [{
            			id: 1,
            			num: 40
            		},
            		{
            			id: 2,
            			num: 40
            		},
            		{
            			id: 3,
            			num: 40
            		},
            		{
            			id: 4,
            			num: 40
            		},
            		{
            			id: 5,
            			num: 40
            		}],
            		material: [{
                              id: 1,
                              name: 'PVC'
                        },
                        {
                              id: 2,
                              name: 'PVC'
                        },
                        {
                              id: 3,
                              name: 'PVC'
                        },
                        {
                              id: 4,
                              name: 'PVC'
                        },
                        {
                              id: 5,
                              name: 'PVC'
                        }],
            		temp: [{
            			id: 1,
            			optTemp: 140
            		},
            		{
            			id: 2,
            			optTemp: 73.4
            		
            		},
            		{
            			id: 3,
            			optTemp: 73
            		},
            		{
            			id: 4,
            			optTemp: 140
            		},
            		{
            			id: 5,
            			optTemp: 80
            		}],
            		standard: [{
            			id: 1,
            			refStd: 'NSF Standard 14'
            		},
            		{
            			id: 2,
            			refStd: 'N/A'            			
            		},
            		{
            			id: 3,
            			refStd: 'NSF Standard 14'            			
            		},
            		{
            			id: 4,
            			refStd: 'NSF Standard 14'            			
            		},
            		{
            			id: 5,
            			refStd: 'N/A'            			
            		}],
            		standardTwo: [{
                              id: 1,
                              name: 'ASTM D 1785'
                        },
                        {
                              id: 2,
                              name: 'ASTM D 1785'
                        },
                        {
                              id: 3,
                              name: 'ASTM D 1785'
                        },
                        {
                              id: 4,
                              name: 'ASTM D 1785'
                        },
                        {
                              id: 5,
                              name: 'ASTM D 1785'
                        }],
            		config: [{
                              id: 1,
                              name: 'plain'
                        },
                        {
                              id: 2,
                              name: 'plain'
                        },
                        {
                              id: 3,
                              name: 'plain'
                        },
                        {
                              id: 4,
                              name: 'plain'
                        },
                        {
                              id: 5,
                              name: 'plain'
                        }]
            	};

            	console.log(' I am in the submittalPage');
            }
        };
    }

    angular.module('clientApp').directive('submittalPage', submittalPage);
})();
    /* jshint ignore:end */

