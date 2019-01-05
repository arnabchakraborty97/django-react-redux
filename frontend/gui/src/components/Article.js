import React from 'react';
import axios from 'axios';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';


class Articles extends React.Component {

	handleDelete (event, articleID) {

		event.preventDefault();

		axios.delete(`http://127.0.0.1:8000/api/articles/${articleID}`)
			.then(res => this.props.onDelete())
	}

	render() {
		return (
			
			<List
			    itemLayout="vertical"
			    size="large"
			    pagination={{
			      onChange: (page) => {
			        console.log(page);
			      },
			      pageSize: 10,
			    }}
			    dataSource={this.props.data}
			    renderItem={item => (
			      <List.Item
			        key={item.title}
			      >
			        <List.Item.Meta
			          title={<Link to={`/${item.id}`}>{item.title}</Link>}
			          description={item.description}
			        />
			        {item.content}<br /><br />
			        <form onSubmit={(event) => this.handleDelete(event, item.id)}>
			        	<Button htmlType="submit" type="danger" size="small">Delete</Button>
			        </form>

			      </List.Item>
			    )}
			/>
		);
	}
}

export default Articles;


