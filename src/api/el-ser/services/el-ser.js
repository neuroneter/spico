'use strict';

/**
 * el-ser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::el-ser.el-ser');
