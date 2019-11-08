module.exports = {
	"title": "Spanish",
	"intro": 'Gracias por completar la encuesta del Plan de Movilidad Sostenible de la Ciudad de Wildomar.\r\nSus comentarios ayudarán a proporcionar recomendaciones para mejorar las opciones de transporte en Wildomar, como caminar, andar en bicicleta y tomar el transporte público.\r\n',
	"instructions": 'INSTRUCTIONS: La encuesta hará una serie de preguntas y tomará alrededor de 5 minutos para completar.\r\nEnvíe sus respuestas por mensaje de texto según las instrucciones para cada pregunta.',
	"disclaimer": 'DISCLAIMER: Respetamos su privacidad y haremos todo lo posible para proteger su información personal.\r\nSus datos solo se utilizarán para fines relacionados con este proyecto y no se compartirán ni distribuirán.',
	"close": 'Gracias por completar la encuesta!',
	"questions": [
		// 0
		{
			"text": "For English, reply with 1.\r\nPara Español, oprima número 2",
			"status": "Open",
			"type": "lang"
		},
		// 1
		{
			"text": "¿En dónde vive?",
			"status": "Open",
			"type": "address",
			"location": 'home'
		},
		// 2
		{
			"text": "¿En un día típico, como viaja alrededor de su comunidad para comprar, comer, hacer diligencias, o fines sociales y recreativos?",
			"status": "Open",
			"type": "single",
			"options": [
				'Caminar',
				'Bicicleta',
				'Transporte Público',
				'Taxi o Vehículo Compartido (Lyft, Uber, etc.)',
				'Motocicleta o Scooter',
				'Viaje Compartido',
				'Manejar Solo',
				'Combinación',
				'Otro'
			]
		},
		// 3
		{
			"text": "¿Actualmente trabaja?",
			"status": "Open",
			"type": "boolean"
		},
		// 4
		{
			"text": "¿Cuál es la dirección de su trabajo?",
			"status": "Open",
			"type": "address",
			"location": 'work',
			"skips": [
				{
					'qNum': 3,
					'criteria': [false]
				}
			]
		},
		// 5
		{
			"text": "¿Como normalmente viaja a su trabajo?",
			"status": "Open",
			"type": "single",
			"options": [
				'Caminar',
				'Bicicleta',
				'Transporte Público',
				'Taxi o Vehículo Compartido (Lyft, Uber, etc.)',
				'Motocicleta o Scooter',
				'Viaje Compartido',
				'Manejar Solo',
				'Combinación',
				'Otro'
			],
			"skips": [
				{
					'qNum': 3,
					'criteria': [false]
				}
			]
		},
		// 6
		{
			"text": "¿Actualmente va a una escuela (primaria, secundaria, preparatoria o universidad)? ",
			"status": "Open",
			"type": "boolean"
		},
		// 7
		{
			"text": "¿Cuál es el nombre de su escuela?",
			"status": "Open",
			"type": "address",
			"location": 'school',
			"skips": [
				{
					'qNum': 6,
					'criteria': [false]
				}
			]
		},
		// 8
		{
			"text": "¿Como normalmente viaja a la escuela?",
			"status": "Open",
			"type": "single",
			"options": [
				'Caminar',
				'Bicicleta',
				'Transporte Público',
				'Taxi o Vehículo Compartido (Lyft, Uber, etc.)',
				'Motocicleta o Scooter',
				'Viaje Compartido',
				'Manejar Solo',
				'Combinación',
				'Otro'
			],
			"skips": [
				{
					'qNum': 6,
					'criteria': [false]
				}
			]
		},
		// 9
		{
			"text": "¿En general, que tan fácil o difícil se le hace caminar en Wildomar?",
			"status": "Open",
			"type": "single",
			"options": [
				'Muy Fácil',
				'Algo Fácil',
				'Neutral',
				'Algo Difícil',
				'Muy Difícil'
			]
		},
		// 10
		{
			"text": '¿Cuáles son algunos de los obstáculos para caminar en Wildomar? ¿Que lo impide de caminar más? ',
			"status": "Open",
			"type": "txt"
		},
		// 11
		{
			"text": "¿En general, que tan fácil o difícil se le hace usar bicicleta en Wildomar?",
			"status": "Open",
			"type": "single",
			"options": [
				'Muy Fácil',
				'Algo Fácil',
				'Neutral',
				'Algo Difícil',
				'Muy Difícil'
			]
		},
		// 12
		{
			"text": '¿Cuáles son algunos de los obstáculos para usar bicicleta en Wildomar? ¿Que lo impide de usar bicicleta más?',
			"status": "Open",
			"type": "txt"
		},
		// 13
		{
			"text": "¿Conoces alguno de los senderos y rutas en bicicleta en Wildomar?",
			"status": "Open",
			"type": "boolean"
		},
		// 14
		{
			"text": 'Por favor, escriba el nombre / ubicaciones de los senderos y rutas en bicicleta que conoce.',
			"status": "Open",
			"type": "txt",
			"skips": [
				{
					'qNum': 13,
					'criteria': [false]
				}
			]
		},

		// 15
		{
			"text": "¿En general, que tan fácil o difícil sientes manejando en Wildomar?",
			"status": "Open",
			"type": "single",
			"options": [
				'Muy Fácil',
				'Algo Fácil',
				'Neutral',
				'Algo Difícil',
				'Muy Difícil'
			]
		},
		// 16
		{
			"text": '¿Cuáles son los mayores desafíos para manejar en Wildomar?',
			"status": "Open",
			"type": "txt"
		},
		// 17
		{
			"text": "¿Cuál es su edad?",
			"status": "Open",
			"type": "num"
		},
		// 18
		{
			"text": "¿Quisiera estar informado de el Plan de Movilidad Sostenible de Wildomar, incluyendo oportunidades futuras para involucrarse?",
			"status": "Open",
			"type": "boolean"
		},
		// 19
		{
			"text": "¿Cuál es su correo electrónico?",
			"status": "Open",
			"type": "email",
			"skips": [
				{
					'qNum': 18,
					'criteria': [false]
				}
			]
		}
	]
};