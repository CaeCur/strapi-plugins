# Strapi plugin News Fetcher

This plugin serves to scrape an online news article for summarised information and add that information to a Content-Type on the Strapi dashboard. The article information currently pulled includes:
- Title
- Description
- Headline Image URL

A link to a news article can be supplied via API POST to /news-fetcher/scrapeNews or via the interface of the Strapi "News Fetcher" Plugin.

## Currently working on

I am currently attempting to utilise the built-in upload API from Strapi to automatically convert the image URL recieved by News Fetcher and add that image to the Strapi Media library afterwhich that image itself is added to the Content-Type instead of the image's URL.
