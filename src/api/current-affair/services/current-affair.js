'use strict';

/**
 * current-affair service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-affair.current-affair');
