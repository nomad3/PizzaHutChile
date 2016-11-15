(function(){

	angular
		.module("phApp")
		.controller("resultsCtrl", ResultsController);

		ResultsController.$inject = ['orderMetrics'];

		function ResultsController(orderMetrics){
			var vm = this;
			vm.orderMetrics = orderMetrics;


		}
})();