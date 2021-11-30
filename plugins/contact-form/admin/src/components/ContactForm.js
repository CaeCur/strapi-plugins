import React, { Component } from "react";
import axios from "axios";

class NewsForm extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render () {
		return (
			<div className="App container pt-5">
				<h1>Contact Form API</h1>
				<p>
					This Plugin offers an endpoint for feeding contact form data from various sources. It adds the
					contact form entries to the "Messages" Content-Type. Messages stored here can be consumed from
					various endpoints.
				</p>
				<h2>Adding Messages</h2>
				<p>
					Messages will be added via POST request to <u>/contact-form/postMessage</u>.
				</p>
				<p>The current model inludes the following values.</p>
				<ul>
					<li>
						name: string <i>required</i>
					</li>
					<li>
						message: text <i>required</i>
					</li>
					<li>
						email: email <i>required</i>
					</li>
				</ul>
        <h2>Consuming Messages</h2>
        <p>
					All Messages available will be displayed through a GET request to <u>/contact-form/</u>.
				</p>
			</div>
		);
	}
}

export default NewsForm;
