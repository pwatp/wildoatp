module.exports = {
	"title": "English",
	"intro": 'Thank you for taking the survey for the City of Wildomar Sustainablle Mobility Plan!\r\nYour comments will help provide recommendations to improve transportation options in Wildomar, including walking, biking, and taking public transit.\r\n',
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
			"text": "Where do you live?",
			"status": "Open",
			"type": "address",
			"location": 'home'
		},
		// 2
		{
			"text": "On a typical day, how do you travel around your community to shop, run errands, eat, or for social or recreational purposes?",
			"status": "Open",
			"type": "single",
			"options": [
				'Walk',
				'Bike',
				'Public Transportation',
				'Taxi or Shared Vehicle (Lyft, Uber, Carpool)',
				'Motorcycle or Scooter',
				'Carpool',
				'Drive Alone',
				'Combination',
				'Other'
			]
		},
		// 3
		{
			"text": "Do you currently work?",
			"status": "Open",
			"type": "boolean"
		},
		// 4
		{
			"text": "Where do you work?",
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
			"text": "How do you commute to work each day?",
			"status": "Open",
			"type": "single",
			"options": [
				'Walk',
				'Bike',
				'Public Transportation (bus, train, etc.)',
				'Taxi or Shared Vehicle (Lyft, Uber, Carpool)',
				'Motorcycle or Scooter',
				'Carpool',
				'Drive Alone',
				'Combination',
				'Other'
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
			"text": "Do you currently go to school (K-12 or college)?",
			"status": "Open",
			"type": "boolean"
		},
		// 7
		{
			"text": "Where do you go to school?",
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
			"text": "How do you normally travel to school each day?",
			"status": "Open",
			"type": "single",
			"options": [
				'Walk',
				'Bike',
				'Public Transportation (bus, train, etc.)',
				'Taxi or Shared Vehicle (Lyft, Uber, Carpool)',
				'Motorcycle or Scooter',
				'Carpool',
				'Drive Alone',
				'Combination',
				'Other'
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
			"text": "In general, how easy/difficult do you feel it is to walk in Wildomar?",
			"status": "Open",
			"type": "single",
			"options": [
				'Very Easy',
				'Somewhat Easy',
				'Neutral',
				'Somewhat Difficult',
				'Very Difficult'
			]
		},
		// 10
		{
			"text": 'What are the biggest challenges for walking in Wildomar? What keeps you from walking more?',
			"status": "Open",
			"type": "txt"
		},
		// 11
		{
			"text": "In general, how easy/difficult do you feel it is to bike in Wildomar?",
			"status": "Open",
			"type": "single",
			"options": [
				'Very Easy',
				'Somewhat Easy',
				'Neutral',
				'Somewhat Difficult',
				'Very Difficult'
			]
		},
		// 12
		{
			"text": 'What are the biggest challenges for biking in Wildomar? What keeps you from biking more?',
			"status": "Open",
			"type": "txt"
		},
		// 13
		{
			"text": "Are you aware of any of the trailheads and bike routes in Wildomar?",
			"status": "Open",
			"type": "boolean"
		},
		// 14
		{
			"text": 'Please type the name/locations of trailheads and bike routes you aware of.',
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
			"text": "What is your age?",
			"status": "Open",
			"type": "num"
		},
		// 16
		{
			"text": "Would you like to stay informed about the Wildomar Sustainable Mobility Plan, including future opportunities to get involved?",
			"status": "Open",
			"type": "boolean"
		},
		// 17
		{
			"text": "What is your email address?",
			"status": "Open",
			"type": "email",
			"skips": [
				{
					'qNum': 16,
					'criteria': [false]
				}
			]
		}
	]
};