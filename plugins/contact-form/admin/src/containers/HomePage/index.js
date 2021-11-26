/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

const HomePage = () => {
	return (
		<div>
			<h1>This will be the interface for the Contact Form Plugin</h1>
			<p>
				This plugin currently only acts as an API endpoint. You can send a JSON Object containing name (string),
				message(text) and email (email) to /postMessage. The details recieved will be added to the Messages
				content-type. This plugin is useful if you have a contact form set up elsewhere and want to send all
				those entries to this admin panel.
			</p>
		</div>
	);
};

export default memo(HomePage);
