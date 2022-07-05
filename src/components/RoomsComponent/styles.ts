import { blue, orange, purple, red, yellow } from '@mui/material/colors';

import styled, { css } from 'styled-components';
import { styled as styledMUI } from '@mui/material'

export const Container = styled.section`
    display: flex;
    gap:3rem;
    justify-content:center;
`;

export const Card = styled.div`
  ${({ theme }) => css`
      position: relative;
      flex:flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      align-content:center;
      width: 200px;
      height: auto; 
      max-height: 320px; 
      background-color: white;
      text-align: center;
      flex-direction: column;
      box-shadow: 17px 15px 40px 5px #000000;
      transition: all 300ms ease-in-out;
      padding: 1rem;
 
      .avatar {
        margin: 1rem auto;
        width: 100px;
        height: 100px;
      }  
      h2 {
        font-weight: 500;
        color: ${blue[900]};
        text-transform: capitalize;
      }

      h3 {
        font-weight: 400;
        color: ${purple[900]}
      }

      .lock {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 10px;
        right: 10px;
        color: ${red['900']};
        background: transparent;
        border: unset;
      }

      &:hover {
      box-shadow: 7px 5px 40px 5px #CCCCCC99;
      } 

      button {
        width: 100%;
        height: 56px;
        font-weight: 600;
        font-size: 1.2rem;
      }
  `}
`;


export const Form = styled.form`
    position: relative;
    display: flex;
    margin: 0 auto;
    top: 40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    height: 100%;
    max-height: 250px;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    gap:2rem;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    background: white;

    button, div {
      width: 100%;
      max-width: 350px;
      height: 56px;
    }

    span {
      position: absolute;
      top: -2.5rem;
      left: 0.5rem;
      color: white;
      text-transform: capitalize;
      font-weight: 600;
      font-size: 2rem;
    }
`;


export const FormCreateRoom = styled.form`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background: white;
    max-width: 800px;
    width: auto;
    margin: 50px;
    padding: 2rem;
    border-radius: 10px;

    h2 {
      color: ${blue['900']};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.5rem;
    }

    input {
      /* background: blue; */
      width: 100%;
    }

    & > div > span {
      text-transform: capitalize;
      color: ${blue[500]}
    }

    .checkBox {
      width: 70px;
      background: transparent;
      cursor: pointer;


      &:hover {
        background: transparent;

      }
    }

    & >button {
      font-weight: 600;
      font-size: 1.2rem;
    }

  `}
`;


export const InputMui = styledMUI('input')({
  fontSize: "1rem",
  color: yellow['800']
})
