
import { blue } from '@mui/material/colors';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    
    button {
      width: 120px;
      height: 70px;
      font-weight: 600;
      font-size: 1rem;
    }
  `}
`;


export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;
    background: white;
    max-width: 400px;
    margin: 10rem auto;
    height: 400px;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    border: 1px solid ${blue['300']};
    border-radius: 10px;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    & > span {
      position: absolute;
      top: -2.5rem;
      left: 0;
      font-weight: 600;
      font-size: 2rem;
      color: ${blue['A700']};
    }
  
  `}
`;

