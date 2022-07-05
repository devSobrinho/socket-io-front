import { Button, Checkbox, Modal, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import * as Styled from './styles';
import { FormEvent, useState, useSyncExternalStore } from 'react';
import { io } from 'socket.io-client';

export type CreateRoomProps = {
  user: {
    email: string;
  }
};

type FormEventProps = {
  target: {
    name?: {
      value: string;
    }
    maxConnection?: {
      value: number;
    }
    password?: {
      value: string;
    }
  }
} & FormEvent<HTMLFormElement>;

const socket = io(String(process.env.NEXT_PUBLIC_SOCKET), {transports: ['websocket']})


export const CreateRoom = ({ user }: CreateRoomProps): JSX.Element  => {
  const [openModal, setOpenModal] = useState(false);
  const [roomPrivate, setRoomPrivate] = useState(false);

  const handleSubmit = (e: FormEventProps) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const maxConnection = e.target.maxConnection?.value;
    const password = e.target.password?.value;
    
    //validation

    socket.emit("create_room", {
      name: user.email,
      maxConnection,
      roomPrivate,
      password,
      userAdmin: {
        id: user.email,
        name: user.email
      }
    })
    
    setOpenModal(false)
  }
  
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <AddIcon color={'primary'} />
      </Button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          margin: '0 auto',
          width: "1000px",
        }}
      >
        <Styled.FormCreateRoom onSubmit={(e) => handleSubmit(e)}>
          <Typography component="h2">create room</Typography>
          <TextField variant="outlined" label="Room name" type="text" name={'name'}/>
          <TextField 
              InputProps={{
                inputProps: { 
                    max: 10, min: 2
                }
              }}
              label="Max connection"  
              type="number" 
              name={'maxConnection'}
              defaultValue="2"
              />

         <div> 
          <span>
            room private
          </span>
          <Checkbox className='checkBox' color="secondary" checked={roomPrivate} onClick={() => setRoomPrivate(prevState => !prevState)}/>
         </div>
         {roomPrivate && (  
            <TextField variant="outlined" label={'password'} name="password" type="password"/>
          )}
          <Button variant="contained" size='large' type="submit">Create</Button>
        </Styled.FormCreateRoom>
      </Modal>
    </>
  );
};
