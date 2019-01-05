import React from 'react';
import axios from 'axios';

import {
  Form, Input, Button,
} from 'antd';

class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, articleID) => {

    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch(requestType) {
      case "POST":
        return axios.post('http://127.0.0.1:8000/api/articles/', {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      case "PUT":
        event.preventDefault();
        return axios.put(`http://127.0.0.1:8000/api/articles/${articleID}/`, {
          title: title,
          content: content
        })
        .then(res => {
          console.log(res)
          const { onUpdate } = this.props
                onUpdate()
        })
        .catch(err => console.log(err))
        default:
            console.log('Invalid')
    }

  }


  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(event,
         this.props.requestType,
         this.props.articleID
        )}>
          <Form.Item label="Title">
            <Input name="title" defaultValue={this.props.title} placeholder="Title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" defaultValue={this.props.content} placeholder="Content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
