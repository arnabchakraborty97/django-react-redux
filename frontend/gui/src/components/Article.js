import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom';

const IconText = ({ type, text }) => (
  	<span>
    	<Icon type={type} style={{ marginRight: 8 }} />
	    {text}
	</span>
);

const Articles = (props) => {
	return (
		
		<List
		    itemLayout="vertical"
		    size="large"
		    pagination={{
		      onChange: (page) => {
		        console.log(page);
		      },
		      pageSize: 3,
		    }}
		    dataSource={props.data}
		    renderItem={item => (
		      <List.Item
		        key={item.title}
		      >
		        <List.Item.Meta
		          title={<Link to={`/${item.id}`}>{item.title}</Link>}
		          description={item.description}
		        />
		        {item.content}
		      </List.Item>
		    )}
		/>
	);
}

export default Articles;


