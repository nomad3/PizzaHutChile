(function(){

	angular
		.module("phApp")
		.controller("orderCtrl", OrderController);

		OrderController.$inject = ['orderMetrics', 'DataService']

		function OrderController(orderMetrics, DataService){

			var vm = this;

			vm.orderMetrics = orderMetrics;
			vm.dataService = DataService;
			vm.questionAnswered = questionAnswered;
			vm.setActiveQuestion = setActiveQuestion;
			vm.selectAnswer = selectAnswer;
			vm.finaliseAnswers = finaliseAnswers;
			vm.activeQuestion = 0;
			vm.error = false;
			vm.finalise = false;

			var numQuestionsAnswered = 0;

			function setActiveQuestion(index){

				if (index === undefined){
					var breakOut = false;
					var orderLength = DataService.orderQuestions.length - 1;

					while(!breakOut){
						vm.activeQuestion = vm.activeQuestion < orderLength?++vm.activeQuestion:0;

						if (vm.activeQuestion === 0){

							vm.error = true;
						}
						if (DataService.orderQuestions[vm.activeQuestion].selected === null){
							breakOut = true;
						}
					} 
				}else {
					vm.activeQuestion = index;
				}
			}

			function questionAnswered(){

				var orderLength = DataService.orderQuestions.length;

				if (DataService.orderQuestions[vm.activeQuestion].selected !== null){
					numQuestionsAnswered++;
					if(numQuestionsAnswered >= orderLength){
						// TODO - Finalise order
						for (var i = 0; i < orderLength; i++){
							if (DataService.orderQuestions[i].selected === null){
								setActiveQuestion(i);
								return;
							}
						}
						vm.error = false;
						vm.finalise = true;
						return;
					}
				}
				
				vm.setActiveQuestion();
			}

			function selectAnswer(index){
				DataService.orderQuestions[vm.activeQuestion].selected = index;
			}

			function finaliseAnswers(){
				vm.finalise = false;
				numQuestionsAnswered = 0;
				vm.activeQuestion = 0;
				orderMetrics.markOrder();
				orderMetrics.changeState("order", false);
				orderMetrics.changeState("results", true);
			}

		}


})();