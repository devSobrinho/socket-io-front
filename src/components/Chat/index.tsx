import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { FormEvent, LegacyRef, useEffect, useRef, useState } from 'react';
import { io } from "socket.io-client";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { Container } from '../Container';
import { MessageComponent } from '../MessageComponent';

import * as Styled from './styles'

type User =  {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  message: string;
  user: User;
  date: Date;
}

export type ChatProps = {
  user: {
    name: string;
    id: string;
  };
  title?: string;
};

type FormProps = {
  target: {
    message?: {
      value: string
    }
  }
} & FormEvent;

const socket = io(String(process.env.NEXT_PUBLIC_SOCKET), {transports: ['websocket']})

export const Chat = ({ user, title }: ChatProps): JSX.Element  => {
  const [messagesState, setMessagesState] = useState<Message[]>([]);
  const [messageState, setMessageState] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const messagesEndRef: LegacyRef<HTMLFormElement> = useRef(null);
  const { query, push } = useRouter();
  const roomId = String(query.roomId);
  
  useEffect(()=> {
    updateMessages();  
  }, []);
 
  useEffect(()=> { 
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },[messagesState])

  function sendMessage(message: string){
    socket.emit("create_message_room", {
      message,
      user,
      roomId,
    })  
  }

  function updateMessages() {
    socket.emit("messages_room", {
      user,
      roomId,
    })
    socket.on("messages_room_response", (data: { messages: Message[], isAdmin: boolean})=> {
      setMessagesState(data.messages);  
      setIsAdmin(data.isAdmin);
    })
  }

  function disconnectRoom() {
    socket.emit("disconnect_room", {
      user,
      roomId
    })
  }

  const handleClickDisconnect = () => {
    disconnectRoom()
    push('/rooms')
  }
  
  const handleSubmit= (e: FormProps) => {
    e.preventDefault();
    if(messageState) {
      sendMessage(messageState);
      setMessageState("")
    } 
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  updateMessages();
  
  return (
    <Container>
      <Styled.Wrapper>
        <div className='infoChat'>
          <h2>Chat: {title}</h2>
          <div className='options'>
            <button onClick={handleClickDisconnect}>
              <MeetingRoomIcon />
            </button>
            {isAdmin && (
              <button className='panel'>
                <AdminPanelSettingsIcon />
              </button>
            )}
          </div>
        </div>
        <Styled.Chat>
          {
            messagesState?.map(message => {
              return (
                <MessageComponent key={message.id} message={message} myMessage={message.user.id === user.id}/>
              )
            })
          }
        </Styled.Chat>

        <form onSubmit={handleSubmit} ref={messagesEndRef}>
          <TextField 
              id="outlined-basic" 
              name='message' 
              label="message" 
              variant="outlined" 
              value={messageState} 
              onChange={(e) => setMessageState(e.target.value)}/>
          <Button variant="contained" type="submit" size="large">Send</Button>
        </form>
      </Styled.Wrapper>
    </Container>
  );
};
