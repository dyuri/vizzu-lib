function defaultChannel(set = null) {
	return { set, range: { min: null, max: null } }
}

function defaultConfig(channels) {
	return {
		data: { filter: null },
		config: {
			channels,
			legend: null,
			coordSystem: 'cartesian',
			geometry: 'rectangle',
			orientation: 'horizontal',
			sort: 'none',
			reverse: false,
			align: 'none',
			split: false
		},
		style: { 
			fontSize: '.90em',
			plot: { 
				backgroundColor: null,
				paddingTop: 30,
				paddingBottom: 25,
				paddingLeft: null,
				paddingRight: null,
				marker: null,
				xAxis: null,
				yAxis: null
			},
			title: {
				fontSize: '1.5em',
				backgroundColor: null,
				paddingBottom: 0,
				paddingTop: null,
				paddingLeft: null,
				paddingRight: null

			},
			legend: null,
			tooltip: null
		}
	};
}

const base = {

	initChart0: chart => {
		chart.feature('tooltip', false);
		return chart.animate(defaultConfig(
		{
			y: defaultChannel(),
			x: defaultChannel(),
			color: defaultChannel(),
			lightness: defaultChannel(),
			label: defaultChannel(),
			size: defaultChannel(),
			noop: defaultChannel()
		}));
	},

	initChart1: chart => {
		chart.feature('tooltip', false);
		return chart.animate(defaultConfig(
		{
			y: defaultChannel('Popularity'),
			x: defaultChannel('Genres'),
			color: defaultChannel(),
			lightness: defaultChannel(),
			label: defaultChannel(),
			size: defaultChannel(),
			noop: defaultChannel()
		}));
	},

	initChart2: chart => {
		chart.feature('tooltip', false);
		return chart.animate(defaultConfig(
		{
			y: defaultChannel(['Popularity', 'Types']),
			x: defaultChannel('Genres'),
			color: defaultChannel('Types'),
			lightness: defaultChannel(),
			label: defaultChannel('Popularity'),
			size: defaultChannel(),
			noop: defaultChannel()
		}))
	}
};

export default function getBase(section) {
	if (section <= 1) return base.initChart0;
	if (section >= 1 && section <= 4) return base.initChart1;
	return base.initChart2;
}