import React from 'react'

const Comment = (props) => {
  return (
    <p className="well">
      <b>{props.comment.user.name}:</b> {props.comment.comment}
    </p>
  )
}

export default Comment