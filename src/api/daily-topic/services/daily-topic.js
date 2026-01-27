'use strict';

/**
 * daily-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-topic.daily-topic');
