import { data } from '/test/integration/test_data/chart_types_eu.js';

data.filter = record =>
    [ 'AT', 'BE', 'DE', 'DK',  'ES', 'FI', 'FR', 'IT', 'NL', 'SE' ].includes(record.Country_code);

const testSteps = [
    chart => chart.animate(
        {
            data: data,


            config:
            {
                channels:
                {
                    x: { set: ['Year', 'Joy factors'] },
                    y: { set: ['Value 3 (+)', 'Country_code'] },
                    color: { set: ['Country_code'] },
                    size: { set: ['Country_code', 'Value 2 (+)'] },
                    noop: { set: ['Year'] }
                },
                title: 'Stacked Streamgraph',
                geometry: 'area',
                align: 'center'
            }
        }
    ),
    chart => chart.animate(
        {            
            config:
            {
                title: 'Check the elements separatelly',
                split: true,
                align: 'min'
            }
        }
    ),
    chart => chart.animate(
        {
            config:
            {
                title: 'Stack them again',
                split: false,
                align: 'center'
            }
        }
    )
];

export default testSteps;