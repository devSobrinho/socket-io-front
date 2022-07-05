import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Checkbox, Input, InputBase, Modal, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import { io } from 'socket.io-client';
import { parseCookies } from "nookies";

import { RoomsComponent } from '../../components/RoomsComponent';
import * as Styled from './styles';
import { CreateRoom } from '../../components/RoomsComponent/CreateRoom';

type RoomsTemplateProps = {
  user: {
    email: string;
  };
};

export const RoomsTemplate = ({ user }: RoomsTemplateProps): JSX.Element  => {
 

  return (
    <Styled.Wrapper>
      <CreateRoom user={user}/>
      <RoomsComponent />
    </Styled.Wrapper>
  );
};
