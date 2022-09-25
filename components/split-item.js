import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: '#F6F6F6',
  border: '1px solid transparent',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
      backgroundColor: '#e8e8e8'
    },
}));

export default function SplitItem(props) {
return <Grid item xs={6} sm={3}>
  <Link href={props.link} underline="none" sx={{ display: 'block', height: '100%' }}>
    <PaperStyled elevation={0}>
      <Typography variant="body1" sx={{ fontSize: '4rem' }}>
        {props.emoji}
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ flex: 1 }}>
        {props.title}
      </Typography>
      <Typography underline>
        Zistiť viac
      </Typography>
    </PaperStyled>
   </Link>
  </Grid>
}
