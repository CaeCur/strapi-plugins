"use strict";

const { default: createStrapi } = require("strapi");
const { sanitizeEntity } = require("strapi-utils");

const model = { source: "contact-form", model: "message" };

/**
 * contact-form.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

module.exports = {
	/**
   * Default action.
   *
   * @return {Object}
   */

	find        : async (ctx) => {
		const result = await strapi.query("message", "contact-form").find();

		return result;
	},

	findOne     : async (ctx) => {
		const { id } = ctx.params;
		const result = await strapi.query("message", "contact-form").findOne({ id });

		return result;
	},
	postMessage : async (ctx) => {
		const data = ctx.request.body;

		const result = await strapi.query("message", "contact-form").create(data);

		return result;
	}
};
