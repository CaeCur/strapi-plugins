"use strict";

const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");
// const url = "https://london-post.co.uk/londoners-back-increasing-captioned-performances-and-events-as-venues-re-open/";

/**
 * news-fetcher.js controller
 *
 * @description: A set of functions called "actions" of the `news-fetcher` plugin.
 */

const uploadByUrl = async (url) => {
	fetch(url).then((response) => response.blob()).then(function (myBlob) {
		const formData = new FormData();
		formData.append("files", myBlob);
		console.log(formData);
		fetch("http://localhost:1337/upload", {
			method  : "POST",
			headers : {},
			body    : formData
		})
			.then((response) => {
				const result = response.json();
				console.log("result", result);
			})
			.catch(function (err) {
				console.log("error:");
				console.log(err);
			});
	});
};

module.exports = {
	/**
   * Default action.
   *
   * @return {Object}
   */

	index      : async (ctx) => {
		// Add your own logic here.

		// Send 200 `ok`
		ctx.send({
			message : "ok"
		});
	},

	// uploadByUrl : async (ctx) => {
	// 	const url = ctx.request.body.url;
	// 	uploadByUrl(url);
	// },

	scrapeNews : async (ctx) => {
		try {
			const url = ctx.request.body.url;

			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto(url);

			const html = await page.content().then(function (html) {
				const $ = cheerio.load(html);
				let scrapeTitle = "";
				let scrapeDescription = "";
				let scrapeImg = "";

				$("meta[property='og:title']", html).each(function () {
					scrapeTitle = $(this).attr("content");
				});
				$("meta[property='og:description']", html).each(function () {
					scrapeDescription = $(this).attr("content");
				});
				$("meta[property='og:image']", html).each(function () {
					scrapeImg = $(this).attr("content");
				});

				const metadata = { title: scrapeTitle, description: scrapeDescription, image: scrapeImg, url: url };

				const result = strapi
					.query("article", "news-fetcher")
					.create(metadata)
					.then(ctx.send({ message: "The article has been added" }))
					.catch((err) => {
						ctx.send({
							message : "The article could not be added to the database",
							error   : ctx.response
						});
					});
			});
			await browser.close();
		} catch (err) {
			ctx.send({ message: "The article could not be added", error: err });
		}
	}
};
