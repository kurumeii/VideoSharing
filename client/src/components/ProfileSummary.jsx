import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div``

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  background-color: ${({ theme }) => theme.loginText};
  color: #f3f3f3;
  padding: 10px 15px;
  border-radius: 2px;
  margin: 4px;
  text-transform: uppercase;
  letter-spacing: 0.65px;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  :hover {
    background-color: #a94fd0;
  }
`

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding-bottom: 1.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const ChannelImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #a3a3a3;
`
const ProfileInfo = styled.div``
const VideoDescriptionWrapper = styled.p`
  margin-left: ${({ MoveLeft }) => `${MoveLeft}px`};
`
const Paragraph = styled.p`
  font-size: 14px;
  font-weight: bold;
  word-break: break-word;
`
const Span = styled.span`
  font-size: 12px;
`
const A = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    color: #a94fd0;
  }
`

function ProfileSummary() {
  const profileRef = useRef(null)
  const descRef = useRef(null)
  const [moveHowMuch, setMove] = useState(0)

  useLayoutEffect(() => {
    const profileLeft = profileRef.current.getBoundingClientRect().left
    const descLeft = descRef.current.getBoundingClientRect().left
    setMove(Math.floor(profileLeft - descLeft))
  }, [])

  return (
    <Container>
      <ProfileWrapper>
        <div>
          <A
            href='https://www.youtube.com/channel/UCgrqQOjae9gCdY1Kfk1ePfQ'
            target='_blank'
            rel='noreferrer'
          >
            <ChannelImg
              alt='channel avatar'
              src='https://yt3.ggpht.com/ytc/AMLnZu9KDVUSwXG0ffKJj7abAHfm4MPZkyQp6aeI7_hUJg=s88-c-k-c0x00ffffff-no-rj'
            />
          </A>
          <ProfileInfo ref={profileRef}>
            <A
              href='https://www.youtube.com/channel/UCgrqQOjae9gCdY1Kfk1ePfQ'
              target='_blank'
              rel='noreferrer'
              title='Channel name'
            >
              <Paragraph>Channel name</Paragraph>
            </A>
            <Span>1 subscriber</Span>
          </ProfileInfo>
        </div>
        <Button>Subscribe</Button>
      </ProfileWrapper>
      <VideoDescriptionWrapper ref={descRef} MoveLeft={moveHowMuch}>
        Doja cat & Rihanna streets × needed me. Thankss for watching!! (◍•ᴗ•◍)
        I'm not the owner of this song, I just speed up the music. If there is a
        problem with the song or pictures please contact me 💬 ig //hznylee
        Pitch//mangachainsawman
      </VideoDescriptionWrapper>
    </Container>
  )
}

export default ProfileSummary
