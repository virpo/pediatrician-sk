// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
      <Paper variant="outlined">Fajna stranka, nie?</Paper>
      </Box>
    </div>
  )
}
