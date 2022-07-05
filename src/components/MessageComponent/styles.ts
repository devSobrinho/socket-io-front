import { blue, orange, purple} from '@mui/material/colors';
import styled, { css } from 'styled-components';

type WrapperProps = {
  myMessage: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, myMessage }) => css`
      position: relative;
      height: auto;
      border: 1px solid ${purple[500]};
      background: ${myMessage ? purple[500] : 'transparent'};
      border-radius: 10px;
      padding: 1rem;
     .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > h3 {
        color: ${blue['500']};
        font-size: 1rem;
        margin-top: 0;
      }
      & > span {
        color: ${orange['400']};
      }
     }

     & > svg {
        position: absolute;
        top: 5px;
        left: -3rem;
        width: 2.5rem;
        height: 2.5rem;
        color: ${purple[500]};
     }

     & > p {
        margin: 0;
        font-size: 1.5rem;
        color: white;
      }
  `}
`;
