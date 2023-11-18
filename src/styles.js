// styles.js
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

export const StyledImageList = styled(ImageList)({
  width: '100%',
  margin: 'auto',
});

export const StyledTextField = styled(TextField)({
    width: '100%',
    marginTop: '8vh', // Ajusta según la posición vertical deseada
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centrar horizontalmente
    '& label': {
      textAlign: 'center',
      width: '100%',
      transition: 'margin-top 0.3s', // Agregado para un efecto suave de transición
    },
    '&:focus-within label': {
      marginLeft: '100px', // Ajusta según el valor de margen izquierdo deseado al hacer clic
    },
  });
  
  
  
  

export const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  [theme.breakpoints.up('md')]: {
    '& img': {
      maxWidth: '80%',
      maxHeight: '80%',
    },
  },
  '& .centered-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));
