'use strict';

/**
 * stari-grad service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stari-grad.stari-grad');
