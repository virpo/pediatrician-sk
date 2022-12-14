// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Box from '@mui/material/Box';

import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Image from 'next/image'

/* eslint-disable jsx-a11y/anchor-is-valid */
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
const { useState } = React;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home(props) {
  const posts = props.posts;
  const answers = props.odpovede;
  const [sum, setSum] = useState(0);
  const [index, setindex] = useState(1);
  const NumQuestions = posts.length;
  const [answered, setMyArray] = useState([]);
  const [isCorrectMessage, setisCorrectMessage] = useState(3);
  var aler_message;
  const StyleBackground = ['greenBcg','yellowBcg','redBcg'];

  //Modal variables
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //Function for submitting the form
  const handleSubmit = event => {
    event.preventDefault();
    setOpen(true)  //open modal
  }
  if (isCorrectMessage==0) {
    aler_message = <Alert severity="error" className="marginTop">Nespr??vna odpove??!</Alert>;
  } 
  if(isCorrectMessage==1) {
    aler_message = <Alert severity="success" className="marginTop">Spr??vna odpove??!</Alert>;
  }
  
  return (
    <>
      <Container className="kvizContainer">
        <Typography variant="h5">
            Otestuj sa ak?? si dobr?? rodi??!
        </Typography>

        <Grid
        container
        spacing={2}
        justifyContent="center">
          <Grid item xs={12}>
            {posts.map((post, indexkey) => {
              if (index === post.id) {
                return (  
                  <Grid key={post.id} container spacing={2}>
                    <Grid item xs={12}>
                      <div key={post.id} className="marginTop">
                      <b>{index}./{NumQuestions}) {post.otazka}</b>
                        <Grid>                        
                          {answers.map((answer) =>
                            <Grid key={index + answer.id} item xs={12} md={4} className="floatleft">
                              <button key={index + answer.id} className={"SecondaryButton "+StyleBackground[answer.id-1]} id={post.id} value={answer.id} onClick={() => isCorrect(answer.id,post.ans)}>{answer.odpoved}</button>
                            </Grid>
                          )}     
                        </Grid> 
                      </div>   
                    </Grid>
                  </Grid>  
                )   
                          
              }
            }
            )}
            </Grid>
          </Grid>   
            {aler_message} 
            {isCorrectMessage != 3 && index<NumQuestions && 
            <div>
              <Button variant="contained" className="marginTop" onClick={() => handleClick()}>Dal??ia ot??zka</Button>   
            </div>
            }
            {isCorrectMessage != 3  && index == NumQuestions && 
            <div>
              <Button variant="contained" className="marginTop"  onClick={() => handleOpen()}>Vyhodnotenie</Button>   
            </div>
            }
            {open &&
              <Grid container justifyContent="center" className="marginTop">
              <Grid item className='centerText' xs={8}>
                <Typography variant="h7" >
                  <b>V???? v??sledok je {sum}/{NumQuestions} ot??zok!</b><br></br>
                  Pode?? sa s t??mto v??sledkom  na socialnej sieti.
                  <br></br><br></br>

                  <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            size="sm"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="lg">Pediatri de??om</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <CardOverflow>
        <AspectRatio>
          <Image src="/instagram.jpeg" alt="Instagram" layout="fill" />
        </AspectRatio>
      </CardOverflow>
      <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: '50%',
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
        100 Likes
      </Link>
      <Typography fontSize="sm">
        <Link
          component="button"
          color="neutral"
          fontWeight="lg"
          textColor="text.primary"
        >
        </Link>{' '}
        M??j v??sledok s kv??zu Pediatri de??om.
      </Typography>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        startDecorator="???"
        sx={{ color: 'text.tertiary' }}
      >
        more
      </Link>
      <Link
        component="button"
        underline="none"
        fontSize="10px"
        sx={{ color: 'text.tertiary', my: 0.5 }}
      >
        5 MINUTES AGO
      </Link>
      <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment???"
          sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
        />
        <Link disabled underline="none" role="button">
          Post
        </Link>
      </CardOverflow>
    </Card>


                </Typography>                
              </Grid>
            </Grid>
            }         
      </Container>
    </>
  )

  function handleClick(){
    setindex(index+1);
    setisCorrectMessage(3);
  }

  function isCorrect(choice, asn){
    if(isCorrectMessage==3){
      if(choice==asn){
        setSum(sum+1);
        setisCorrectMessage(1)
      }else{
        if(sum>0){
          setSum(sum-1);
        }
          setisCorrectMessage(0)
        
      }
    }
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'otazky.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

