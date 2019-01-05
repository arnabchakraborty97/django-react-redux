import React from 'react';
import axios from 'axios';

import { Card, Row, Col } from 'antd';

import Articles from '../components/Article';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

	state = {
		articles: []
	}

	fetchArticles() {
		axios.get('http://127.0.0.1:8000/api/articles/')
			.then(res => {
				this.setState({
					articles: res.data
				})
			})
	}

	componentDidMount() {
		this.fetchArticles()
	}

	render() {

		return (
			<div>

				<Row>
					<Col span={15}>
						<Articles data={this.state.articles} />
					</Col>
					<Col span={8} offset={1}>
						<Card title="Create Article">
							<CustomForm
								requestType="POST"
								articleID={null}
								buttonText="Create"
							/>
						</Card>
					</Col>
				</Row>
			</div>
		)

	}

}

export default ArticleList;