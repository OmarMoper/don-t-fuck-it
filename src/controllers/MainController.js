(function() {
	'use strict';
	angular.module('DontFuckIt')
		.controller('MainController', function($scope, DontFuckItService) {
		initialize();
		/**
		 * Initialize app.
		 */
		function initialize() {
		  initializeVars();
		  loadIndex();
		}

		/**
		 * Initialize vars.
		 */
		function initializeVars($) {
		  $scope.jobs = {};
		  $scope.issue = null;
		  $scope.currentJob = null;
		  $scope.currentSection = {'name': '', 'id': ''};
		}

		/**
		 * Load index file.
		 */
		function loadIndex() {
		  DontFuckItService.index().success(function(response) {
		  	$scope.jobs = response;
		  });
		}

		/**
		 * Load a job.
		 */
		function loadJob(job) {
	    DontFuckItService.get(job).success(function(job) {
	      $scope.currentJob = job;
	    });
		}
		$scope.loadJob = loadJob;
	});
})();
