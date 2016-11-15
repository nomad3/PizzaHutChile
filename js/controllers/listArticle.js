(function(){

	angular
		.module("phApp")
		.controller("listArticleCtrl", ListArticleController);

		ListArticleController.$inject = ['orderMetrics', 'DataService'];

		function ListArticleController(orderMetrics, DataService){
			var vm = this;

			vm.orderMetrics = orderMetrics;
			vm.articlesData = DataService.articlesData;
			vm.activateOrder = activateOrder;

 			function activateOrder(){
				orderMetrics.changeState("order", true);
			}
		}

})();