import { styled } from '@mui/material/styles';

import styles from '../styles/Home.module.css'

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

const SplitItem = (props) => <Grid item xs={6} sm={3}>
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

export default function Home() {
  return (
    <div className={styles.container}>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            Všetko o zdraví vášho
            dieťaťa na jednom mieste
          </Typography>
          <Typography variant="body1">
            The other option is to use an in the ear thermometer (tympanic), although these should not be used in babies below a month of age.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ECvpav9c1TM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Grid>
      </Grid>

      <Typography variant="h2">
        Čo trápi vaše dieťa?
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        sx={{ my: 2 }}
        spacing={2}
      >
        {
          [
            {title: 'Moje dieťa do 3 mesiacov', emoji: '👶', link: '#'},
            {title: 'Moje dieťa nad 3 mesiace', emoji: '👦', link: '#'},
            {title: 'COVID-19', emoji: '🦠', link: '#'},
            {title: 'Duševné zdravie detí', emoji: '😵‍💫', link: '#'},
            {title: 'Administratívne - OČR, Potv., ...', emoji: '📄', link: '#'},
            {title: 'Horúčka u detí', emoji: '🌡', link: '#'},
            {title: 'Nový rodič', emoji: '🫄', link: '#'},
            {title: 'Otestuj svoje vedomosti', emoji: '❓', link: '#'},
          ].map((item, index) => <SplitItem title={item.title} emoji={item.emoji} link={item.link} key={index} />)
        }
      </Grid>
    </div>
  )
}
