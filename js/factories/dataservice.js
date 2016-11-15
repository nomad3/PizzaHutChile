(function(){

	angular
		.module("phApp")
		.factory("DataService", DataService);

		function DataService(){
			var dataObj = {
				articlesData: articlesData,
				orderQuestions: orderQuestions,
				correctAnswers: correctAnswers
			};

			return dataObj;
		}


	var correctAnswers = [1,2,3,0,0];

    var orderQuestions  = [
        {
            type: "text",
            text: "Seleccione el tamaño de su pizza",
            possibilities: [
                {
                    answer: "Peña"
                },
                {
                    answer: "Mediana"
                },
                {
                    answer: "Grande"
                },
                {
                    answer: "Familiar"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Tipo de masa",
            possibilities: [
                {
                    answer: "Original"
                },
                {
                    answer: "Borde con queso"
                },
                {
                    answer: "Delgada"
                },
                {
                    answer: "Otra mas"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Extras",
            possibilities: [
                {
                    answer: "Pimenton"
                },
                {
                    answer: "Cebolla"
                },
                {
                    answer: "Jamón"
                },
                {
                    answer: "Bacon"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Bebidas",
            possibilities: [
                {
                    answer: "Pepsi"
                },
                {
                    answer: "CocaCola"
                },
                {
                    answer: "Sprite"
                },
                {
                    answer: "Otra mas"
                }
            ],
            selected: null,
            correct: null
        },  
        {
            type: "text",
            text: "Pago",
            possibilities: [
                {
                    answer: "Efectivo"
                },
                {
                    answer: "Paypal"
                },
                {
                    answer: "Transferencia"
                }
            ],
            selected: null,
            correct: null
        }     
    ];

		var articlesData = [
        {
            type: "Oferta Pizza",
            image_url: "http://localhost/PizzaHutChile/img/pizz.jpg",
            data_url: "http://localhost/PizzaHutChile/product2.html",
            data_class: "ad1",
            description: " Pizza familas mas refresco."
        },
        {
            type: "Oferta Pizza2",
            image_url: "http://localhost/PizzaHutChile/img/pizz2.jpg",
            data_url: "http://localhost/PizzaHutChile/product2.html",
            data_class: "ad2",
            description: "Pizza familiar mas alitas BBQ."
        }
    ];

})();