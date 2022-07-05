import { blue } from '@mui/material/colors';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  
    svg {
      background: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 400ms ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  `}
`;

