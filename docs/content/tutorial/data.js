const data = {
	series: [
		{
			name: 'Genres',
			type: 'dimension',
			values: [
				'Pop', 'Rock', 'Jazz', 'Metal', 
				'Pop', 'Rock', 'Jazz', 'Metal', 
				'Pop', 'Rock', 'Jazz', 'Metal',
			]
		},
		{
			name: 'Types',
			type: 'dimension',
			values: [
				'Hard', 'Hard', 'Hard', 'Hard', 
				'Smooth', 'Smooth', 'Smooth', 'Smooth', 
				'Experimental', 'Experimental', 'Experimental', 'Experimental'
			]
		},
		{
			name: 'Popularity',
			type: 'measure',
			values: [
				78, 96, 114, 52, 174, 36, 56, 121, 94, 83, 127, 58 
			]
		},
	]
};

export default data;
