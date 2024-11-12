import { styled } from '@mui/material';

// Styled components
const MainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const ActionDiv = styled('div')({
  textAlign: 'center',
});

export { MainContainer, SmMargin, ActionDiv };
