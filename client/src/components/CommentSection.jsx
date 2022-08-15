import React from 'react'
import styled from 'styled-components'
import Comment from './Comment.jsx'

const Container = styled.div``
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 5px;
  &:focus-visible,
  &:focus {
    outline: none;
    outline-color: transparent;
  }
`

function CommentSection() {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu9KDVUSwXG0ffKJj7abAHfm4MPZkyQp6aeI7_hUJg=s88-c-k-c0x00ffffff-no-rj'></Avatar>
        <Input placeholder='new comment'></Input>
      </NewComment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </Container>
  )
}

export default CommentSection
