import ChildCareIcon from '@mui/icons-material/ChildCare';

import { formatDate } from '../../utils/formatDate';
import { Message as IMessage } from '../Chat';
import * as Styled from './styles';


export type MessageComponentProps = {
  message: IMessage;
  myMessage: boolean;
};

export const MessageComponent = ({ message, myMessage }: MessageComponentProps): JSX.Element  => {
  return (
    <Styled.Wrapper myMessage={myMessage}>
      {myMessage && <ChildCareIcon />}
      <div className='info'>
        <h3>{message.user?.name}</h3>
        <span>{formatDate(message.date)}</span>
      </div>
      <p> {message.message}</p>
    </Styled.Wrapper>
  );
};
