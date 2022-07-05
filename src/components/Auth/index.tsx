import { Button, Modal, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import * as Styled from './styles';
import { setCookie } from "nookies";

export type LoginProps = {
  title?: string;
};

export const LoginOrRegister = ({ title }: LoginProps): JSX.Element  => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <Styled.Container>

      <Button onClick={() => setLoginModal(true)} variant='contained'>Login</Button>
      <Modal
        open={loginModal}
        onClose={()=> setLoginModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Login/>
      </Modal>

      <Button onClick={() => setRegisterModal(true)} variant='contained'>Register</Button>
      <Modal
        open={registerModal}
        onClose={()=> setRegisterModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Register/>
      </Modal>
    </Styled.Container>
  );
};

type IFormProps = {
  target: {
    email?: {
      value: string;
    }
    password: {
      value: string;
    }
  }
} & FormEvent<HTMLFormElement>;


export const Login = ({ title }: LoginProps): JSX.Element  => {

  const handleSubmit = (e: IFormProps) => {
    e.preventDefault()
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    setCookie(null, "user", JSON.stringify({ email, password}));

    // tem q validar e tudo mais 
    
  }
  
  return (
      <Styled.Form onSubmit={(e: IFormProps) => handleSubmit(e)}>
        <span>Login</span>
        <TextField id="outlined-basic" label="email" name="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" name="password" variant="outlined" type={'password'} />
        <Button variant="contained" size='large' type="submit">Send</Button>
      </Styled.Form>
  );
};

export const Register = ({ title }: LoginProps): JSX.Element  => {
  return (
      <Styled.Form>
        <span>Register</span>
        <TextField id="outlined-basic" name="emailRegister" label="email" variant="outlined" />
        <TextField id="outlined-basic" name="passwordRegister" label="password" variant="outlined" type={'password'} />
        <TextField id="outlined-basic" name="rePasswordRegister" label="re-password" variant="outlined" type={'password'} />
        <Button variant="contained" size='large' type="submit">Send</Button>
      </Styled.Form>
  );
};

