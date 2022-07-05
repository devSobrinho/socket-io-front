import type { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies';
import { LoginOrRegister } from '../components/Auth'
import { Container } from '../components/Container';


const Home: NextPage = () => {
  return (
    <Container>
      <LoginOrRegister />
    </Container>
  )
}
export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user: userCookies } = parseCookies(ctx);
  if(userCookies) {
    return {
      redirect: {
        permanent: false, 
        destination: "/rooms"
      },
    }
  }
  

  
  return {
    props: {}
  }
} 
