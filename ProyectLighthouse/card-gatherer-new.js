'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCardNew extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardLoadTimeNew')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find card load metrics in pageNEW');
                }
                return cardLoadTime;
            });
    }
}

module.exports = TimeToCardNew;
