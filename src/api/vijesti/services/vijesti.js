'use strict';

/**
 * vijesti service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vijesti.vijesti');
