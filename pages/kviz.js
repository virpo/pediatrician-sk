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
    aler_message = <Alert severity="error" className="marginTop">Nesprávna odpoveď!</Alert>;
  } 
  if(isCorrectMessage==1) {
    aler_message = <Alert severity="success" className="marginTop">Správna odpoveď!</Alert>;
  }
  
  return (
    <>
      <Container className="kvizContainer">
        <Typography variant="h5">
            Otestuj sa aký si dobrý rodič!
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
                      <b>{index}/{NumQuestions} {post.otazka}</b>
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
              <Button variant="contained" className="marginTop" onClick={() => handleClick()}>Dalšia otázka</Button>   
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
                  <b>Váš výsledok je {sum}/{NumQuestions} otázok!</b><br></br>
                  Podeľ sa s týmto výsledkom  na socialnej sieti.
                  <br></br><br></br>                  
                  <Box justifyContent="center" className="Sharetext">Moje skóre z 'Pediatri deťom' je {sum}/{NumQuestions}. Otestuj sa tiež na <a className="Alink" href="https://pediatrician.vercel.app/">Pediatri deťom</a></Box>

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

