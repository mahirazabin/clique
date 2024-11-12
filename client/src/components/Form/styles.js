import { styled } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const Paper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const FileInput = styled('div')(() => ({
  width: '97%',
  margin: '10px 0',
}));

const ButtonSubmit = styled('button')(() => ({
  marginBottom: '10px',
}));

export { Root, Paper, Form, FileInput, ButtonSubmit };
