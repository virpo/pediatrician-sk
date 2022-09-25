import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import SplitItem from '/components/split-item'

export default function Home() {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mt: 3 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Domov
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="#"
          aria-current="page"
        >
          Nad 3 mesiace 👦
        </Link>
      </Breadcrumbs>

      <Typography variant="h2" sx={{ mt: 6 }}>
        Moje dieťa nad 3 mesiace 👦
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
            {title: 'Určenie závažnosti (nad 3 mesiace)', emoji: '🍼', link: '#'},
            {title: 'Určenie závažnosti (dospievajúce)', emoji: '👦', link: '#'},
            {title: 'Bolesť brucha', emoji: '🤢', link: '#'},
            {title: 'Poranenie ruky', emoji: '💪', link: '#'},
            {title: 'Astmatický záchvat', emoji: '😮‍💨', link: '#'},
            {title: 'Zápal priedušiek', emoji: '🫁', link: '#'},
            {title: 'Ovčie kiahne', emoji: '🔴', link: '#'},
            {title: 'Zapal spojiviek', emoji: '👁', link: '#'},
            {title: 'Zápcha', emoji: '🚽', link: '#'},
            {title: 'Kašeľ a prechladnutie', emoji: '😷', link: '#'},
            {title: 'Záškrt', emoji: '😫', link: '#'},
            {title: 'Hnačka a zvracanie', emoji: '💩', link: '#'},
            {title: 'Problémy s dýchaním a piskot', emoji: '😮‍💨', link: '#'},
            {title: 'Bolesť ucha', emoji: '👂', link: '#'},
            {title: 'Ekzém', emoji: '🔴', link: '#'},
            {title: 'Horúčka u detí', emoji: '🌡', link: '/nad-3-mesiace/horucka'},
            {title: 'Potravinové intolerancie', emoji: '🌾', link: '#'},
            {title: 'Choroba ruka-noha-ústa', emoji: '✋', link: '#'},
            {title: 'Bolesť hlavy', emoji: '🤯', link: '#'},
            {title: 'Poranenie hlavy', emoji: '🤕', link: '#'},
            {title: 'Iné infekcie', emoji: '😷', link: '#'},
            {title: 'Úraz', emoji: '🩹', link: '#'},
            {title: 'Krívanie', emoji: '🚶', link: '#'},
            {title: 'Meningitída', emoji: '🧠', link: '#'},
            {title: 'Krvácanie z nosa', emoji: '🩸', link: '#'},
            {title: 'Otrava/náhodné prehltnutie', emoji: '🧪', link: '#'},
            {title: 'Vyrážky', emoji: '🍓', link: '#'},
            {title: 'Šarlach', emoji: '👅', link: '#'},
            {title: 'Záchvaty', emoji: '😵‍💫', link: '#'},
            {title: 'Sepsa', emoji: '🤒', link: '#'},
            {title: 'Bolesť hrdla', emoji: '😷', link: '#'},
            {title: 'Prehltnutie cudzieho predmetu', emoji: '🧱', link: '#'},
            {title: 'Kliešte', emoji: '🕷', link: '#'},
            {title: 'Malo by vaše dieťa ísť dnes do školy/škôlky?', emoji: '🏫', link: '#'},
            {title: 'Informácie o liekoch vášho dieťaťa', emoji: '💊', link: '#'},
            {title: 'Naučte svoje dieťa prehĺtať tablety', emoji: '😋', link: '#'},
            {title: 'Ako dať dieťaťu tekuté lieky', emoji: '🧃', link: '#'},
            {title: 'Moje dospievajúce dieťa', emoji: '👪', link: '#'},
            {title: 'Deti a správy o vojne', emoji: '🧨', link: '#'},
          ].map((item, index) => <SplitItem title={item.title} emoji={item.emoji} link={item.link} key={index} />)
        }
      </Grid>
    </>
  )
}
