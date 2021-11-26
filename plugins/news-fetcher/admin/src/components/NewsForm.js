import React, { Component } from "react";
import axios from "axios";

class NewsForm extends Component {
	constructor (props) {
		super(props);
		this.state = { newsUrl: "" };
	}

	handleChange = (event) => {
		axios
			.post("http://localhost:1337/news-fetcher/scrapeNews", {
				url : this.state.newsUrl
			})
			.then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		event.preventDefault();
	};

	bindUrlEvent = (event) => {
		this.setState({ newsUrl: event.target.value });
	};

	render () {
		return (
			<div className="App container pt-5">
				<h2>News Scraper</h2>
				<form onSubmit={this.handleChange}>
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Article URL</label>
						<input
							type="url"
							className="form-control"
							value={this.state.newsUrl}
							onChange={this.bindUrlEvent}
							placeholder="example.com/article-link"
						/>
					</div>
					<button type="submit" className="btn btn-primary p-2">
						Fetch Article
					</button>
				</form>
			</div>
		);
	}
}

export default NewsForm;
