import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

import { Chat, Message } from '../../components/Chat'


interface RoomProps {
  user: {
    name: string;
    id: string;
  }
  messages: Message[];
}

const Room = ({ user, messages }: RoomProps) => {
  return (
    <>
      <Chat user={user}/>
    </>
  )
}
export default Room;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user: userCookies } = parseCookies(ctx);

  if(!userCookies) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const user = JSON.parse(userCookies);
  
  return {
    props: { 
      user: {
        id: user.email,
        name: user.email
      },
    },
  }
}
