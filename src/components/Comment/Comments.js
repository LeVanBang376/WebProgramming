import React from "react";
import {Button, Comment, Form} from 'semantic-ui-react'
import CommentItem from "./CommentItem";
import "./styles.css"

const comments = [
    {id: 1, author: "Author Name", content: "I like this product", date: "Today", imgUrl: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
    {id: 1, author: "Author Name", content: "I like this product", date: "Today", imgUrl: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
    {id: 1, author: "Author Name", content: "I like this product", date: "Today", imgUrl: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
    {id: 1, author: "Author Name", content: "I like this product", date: "Today", imgUrl: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
]

const Comments = () => {
  return (
    <Comment.Group>
    {
      comments.length <= 0 ? <p>No Comments</p> :
      comments.map(item=>(
        <CommentItem
          key={item.id}
          author={item.author}
          imgUrl={item.imgUrl}
          content={item.content}
          date={item.date}
        />
      ))
    }
      <Form reply>
        <Form.TextArea />
        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  )
}
export default Comments