import type { GetServerSideProps, NextPage } from 'next'
import { Chat } from '../../components/Chat'
import { LoginOrRegister } from '../../components/Auth'
import { RoomsComponent } from '../../components/RoomsComponent'
import { RoomsTemplate } from '../../template/RoomsTemplate'
import { Container } from '../../components/Container'
import { parseCookies } from 'nookies'

interface RoomsProps {
  user: {
    email: string;
  }
}

const Rooms = ({user}: RoomsProps) => {
  return (
    <>
      <Container>
        <RoomsTemplate user={user}/>
      </Container>
    </>
  )
}
export default Rooms;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user: userCookies } = parseCookies(ctx);
  if(!userCookies) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }
  const user = JSON.parse(userCookies)
  
  return {
    props: {
      user: {
        email: user.email
      }
    }
  }
} 

