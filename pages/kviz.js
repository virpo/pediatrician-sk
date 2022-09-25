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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
    aler_message = <Alert severity="error" className="marginTop">Nesprvávna odpoveď</Alert>;
  } 
  if(isCorrectMessage==1) {
    aler_message = <Alert severity="success" className="marginTop">Správna odpoveď</Alert>;
  }
  return (
    <Container>
          {posts.map(post => {
            if (index === post.id) {
              return (  
                <div className="marginTop">
                  <b>{index}./{NumQuestions}) {post.otazka}</b>
                  {answers.map((answer) =>
                      <button className={"SecondaryButton "+StyleBackground[answer.id-1]} id={post.id} value={answer.id} onClick={() => isCorrect(answer.id,post.ans)}>{answer.odpoved}</button>
                  )}      
                </div>   
              )              
            }
          }
          )}     
          {aler_message} 
          {isCorrectMessage != 3 && index<NumQuestions && 
          <div>
            <Button onClick={() => handleClick()}>Dalšia otázka</Button>   
          </div>
          }
          {isCorrectMessage != 3  && index == NumQuestions && 
          <div>
            <Button onClick={() => handleOpen()}>Vyhodnotenie</Button>   
          </div>
          }

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Váš výsledok je:
            </Typography>
            {sum}/{NumQuestions}
          </Box>
        </Modal>
    </Container>
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
