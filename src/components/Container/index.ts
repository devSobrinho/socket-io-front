import { purple } from '@mui/material/colors';
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${purple['900']};
    display: flex;
    flex-direction:  column;
    padding:2rem;
`;