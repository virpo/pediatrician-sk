import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '4rem 2rem',
  backgroundColor: '#F6F6F6',
  borderLeft: '10px solid transparent',
  '&.red': {
    borderLeftColor: theme.palette.error.main
  },
  '&.yellow': {
    borderLeftColor: theme.palette.warning.main
  },
  '&.green': {
    borderLeftColor: theme.palette.success.main
  },
}));

export default function InfoBlock(props) {
return <PaperStyled elevation={0} className={props.color} sx={props.topGap && { mt: props.topGap }}>
    {props.children}
  </PaperStyled>
}
