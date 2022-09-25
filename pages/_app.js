import '../styles/globals.css'

import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';

import Image from 'next/image'
import logo from '/public/pedi.png'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GithubIcon from '@mui/icons-material/Github';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#36AA56',
    },
    error: {
      main: '#c62d2d',
    },
    warning: {
      main: '#E8BA19',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      fontWeight: '700'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: '700'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '700'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  shape: {
    borderRadius: 2,
  },
};

const theme = createTheme(themeOptions);

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ p: '0 !important' }}>
            <Link underline="none" color="inherit" href="/" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <div className='logo'>
                  <Image
                    src={logo}
                    alt="Pediatri detom"
                    width="48px"
                    height="32px"
                  />
                  <strong>Pediatri deťom</strong>
                </div>
              </Typography>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Hľadať"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    <Container maxWidth="lg">
      <Component {...pageProps} />
    </Container>

    <div className='footer'>
      <Typography variant="body1">
        <Link underline="always" color="inherit" href="https://github.com/virpo/pediatrician-sk">
          <GithubIcon />
        </Link>
      </Typography>
      <Typography variant="body1">
        © 2022 HIWFFF
      </Typography>
    </div>
  </ThemeProvider>
}

export default MyApp
