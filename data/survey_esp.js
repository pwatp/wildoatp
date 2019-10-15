module.exports = {
	"title": "Spanish",
	"intro": 'Thank you for taking the survey for the City of Wildomar Active Transportation Plan (ATP)!\r\nYour comments will help provide recommendations to improve walking and biking in Wildomar.\r\n',
	"instructions": 'INSTRUCTIONS: The survey will ask a series of questions and take around 5 minutes to complete.\r\nPlease text your responses as instructed for each question.',
	"disclaimer": 'DISCLAIMER: We respect your privacy and will do our best to protect your personal information.\r\nYour data will only be used for purposes related to this project and will not be shared or distributed.',
	"close": 'Thank you for completing the survey!',
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
			"text": "¿Actualmente va a una escuela? ",
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
			"text": "¿Cuál es su edad?",
			"status": "Open",
			"type": "num"
		},
		// 14
		{
			"text": "¿Quisiera estar informado de el Plan de Transportación Activa de Wildomar, incluyendo futuras oportunidades para involucrarse?",
			"status": "Open",
			"type": "boolean"
		},
		// 15
		{
			"text": "¿Cuál es su correo electrónico?",
			"status": "Open",
			"type": "email",
			"skips": [
				{
					'qNum': 14,
					'criteria': [false]
				}
			]
		}
	]
};