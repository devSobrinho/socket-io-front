import { orange, purple } from '@mui/material/colors';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 2rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content:space-between; 
    background-color: ${purple[900]};

    & > .infoChat{
      position: fixed;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      top: 0;
      left: 0;
      background-color: ${purple[900]};
      padding: 1rem;
      /* border-bottom: 1px solid white; */

      & > h2 {
        color: white;
      }

      & > .options {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        
        button {
          background: transparent;
          border:  unset;

          svg {
            width: 50px;
            height: 50px;
            color: white;
            cursor: pointer;
          }
        }  
        
        .panel svg {
          color: ${orange[500]};
        }
      }
    }
    
    & > h2 {
      position: absolute;
      top: -2rem;
    }

    & > form {
      display: flex;
      align-items: center;
      gap: 1rem;
      & > div {
        width: 100%;
        & > div {
          background: #BBBBBB;
        }
      }
      & > button {
        width: 100%;
        max-width: 150px;
        height: 56px;
        font-size: 1.2rem;
        font-weight: 600;
        border-color: red;
      }
    }
  `}
`;

export const Chat = styled.div`
  ${({ theme }) => css`
    margin-top: 100px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`;

