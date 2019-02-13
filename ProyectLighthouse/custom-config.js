'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer'
        ]
    }],

    audits: [
        'card-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site old',
            audits: [
                {id: 'card-audit', weight: 1}
            ]
        }
    }
};
