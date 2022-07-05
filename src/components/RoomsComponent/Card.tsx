import { Avatar, Button, Modal, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { FormEvent, MouseEvent, useState } from 'react';
import { io } from 'socket.io-client';
import LockIcon from '@mui/icons-material/Lock';
import { toast } from "react-toastify";

import * as Styled from './styles';
import { parseCookies } from 'nookies';

type CardProps = {
  name: string;
  id: string;
  isPrivate: boolean;
};

type HandleFunc = {
  target: {
    password?: {
      value: string;
    }
  }
} & (FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>)

const socket = io(String(process.env.NEXT_PUBLIC_SOCKET), {transports: ["websocket"]})

export const Card = ({ name, id, isPrivate }: CardProps): JSX.Element  => {
  const [roomModal, setRoomModal] = useState(false);
  const { pathname, push } = useRouter();

  const handleClick = (e: HandleFunc) => {
    e.preventDefault();

    const password = e.target.password?.value;

    const { user: userCookies } = parseCookies();
    const user = JSON.parse(userCookies);

    socket.emit("select_room", {
      id,
      password,
      user: {
        id: user.email,
        name: user.email
      }
    });

    socket.on("select_room_message", data => {
      if(data.status !== 200) {
        return toast.error(data.message);
      }
      push(`${pathname}/${id}`);
    })
  }
  
  return (
      <Styled.Card>
        <Avatar alt={name} src="/static/images/avatar/1.jpg" className='avatar'/>
        <h2 className='nameRoom'>name room</h2>
        <h3>{name}</h3>
        {
          isPrivate && (
            <>
              <button className='lock' onClick={() => setRoomModal(true)}>
                <LockIcon />
              </button>
              <Button variant='contained' onClick={() => setRoomModal(true)}>enter</Button>
              <Modal
                open={roomModal}
                onClose={() => setRoomModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Styled.Form onSubmit={(e: HandleFunc) => handleClick(e)}>
                  <span>room</span>
                  <TextField type="password" name="password" label="password room" className="inputPassword"/>
                  <Button variant="contained" type="submit">enter</Button>
                </Styled.Form>
              </Modal>
            </>
          )
        }
        {!isPrivate && (<Button variant="contained" onClick={(e: HandleFunc) => handleClick(e)}>enter</Button>)}
      </Styled.Card>
  );
};
