'use strict';

/**
 * kustos service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kustos.kustos');
