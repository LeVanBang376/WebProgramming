import React from "react";
import { Button, Comment, Form } from 'semantic-ui-react'

const CommentItem = (props) => {
  let {author, imgUrl, date, content } = props;
  return (
    <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src={imgUrl} />
      <Comment.Content>
        <Comment.Author>{author}</Comment.Author>
        <Comment.Metadata>
          <div>{date}</div>
        </Comment.Metadata>
        <Comment.Text>
          {content}
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

  </Comment.Group>
  )
}
export default CommentItem