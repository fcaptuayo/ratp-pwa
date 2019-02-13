'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME_NEW = 2000;

class LoadAuditNew extends Audit {
    static get meta() {
        return {
            category: 'MyPerformanceNEW',
            name: 'card-audit',
            description: 'Schedule card initialized and readyNEW',
            failureDescription: 'Schedule Card slow to initializeNEW',
            helpText: 'Used to measure time from navigationStart to when the scheduleNEW' +
                ' card is shown.NEW',

            requiredArtifacts: ['TimeToCardNew']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCardNew;

        const belowThreshold = loadedTime <= MAX_CARD_TIME_NEW;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAuditNew;
