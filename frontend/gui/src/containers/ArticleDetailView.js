import React from 'react';
import axios from 'axios';

import { Card, Row, Col } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

	state = {
		article: {}
	}

	fetchArticle() {
		const articleID = this.props.match.params.articleID;
		axios.get(`http://127.0.0.1:8000/api/articles/${articleID}`)
			.then(res => {
				this.setState({
					article: res.data
				})
			})
	}

	componentDidMount() {
		this.fetchArticle()
	}

	render() {

		return (
			<div>
				<Row>
					<Col span={15}>
						<Card title={this.state.article.title}>
							<p>{this.state.article.content}</p>
						</Card>
					</Col>
					<Col span={8} offset={1}>
						<Card title="Edit Article">
							<CustomForm 
								requestType="PUT"
								articleID={this.state.article.id}
								buttonText="Update"
								title={this.state.article.title}
								content={this.state.article.content}
								onUpdate={() => this.fetchArticle()}
							/>
						</Card>
					</Col>
				</Row>
			</div>
		)

	}

}

export default ArticleDetail;