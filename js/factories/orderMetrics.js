(function(){

	angular
		.module("phApp")
		.factory("orderMetrics", OrderMetrics);

		OrderMetrics.$inject = ['DataService'];

		function OrderMetrics(DataService){
			var orderObj = {
				orderActive: false,
				resultsActive: false,
				changeState: changeState,
				correctAnswers: [],
				markOrder: markOrder,
				numCorrect: 0
			};

			return orderObj;

			function changeState(metric, state){

				if (metric === "order"){
					orderObj.orderActive = state;
				}else if(metric === "results"){
					orderObj.resultsActive = state;
				}else{
					return false;
				}

			}

			function markOrder(){
				orderObj.correctAnswers = DataService.correctAnswers;
				for (var i = 0; i < DataService.orderQuestions.length; i++){
					if (DataService.orderQuestions[i].selected === DataService.correctAnswers[i]){
						DataService.orderQuestions[i].correct = true;
						orderObj.numCorrect++;
					}else{
						DataService.orderQuestions[i].correct = false;
					}
				}
			}
		}
})();