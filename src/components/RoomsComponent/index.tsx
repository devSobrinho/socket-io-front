import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Card } from './Card';
import * as Styled from "./styles";


type RoomState = {
  name: string;
  id: string;
  isPrivate: boolean;
}

const socket = io(String(process.env.NEXT_PUBLIC_SOCKET), {transports: ['websocket'], autoConnect: true})

export const RoomsComponent = (): JSX.Element  => {
  const [roomsState, setRoomsState] = useState<RoomState[]>([]);
  

  function getRooms() {
    socket.emit("rooms_resquest", {
      
    })
    socket.on("rooms", (data) => {
      setRoomsState(data.rooms)
    })
  }
  
  useEffect(()=>{
    getRooms();
  },[])

  socket.on("rooms",  (data) => {
    setRoomsState(data.rooms);
  }) 

  return (
    <Styled.Container>
     {roomsState && roomsState?.map(room => {
       return (
         <Card key={room.id} id={room.id} name={room.name} isPrivate={false}/>
       )
     })}
    </Styled.Container>
   );
};
