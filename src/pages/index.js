import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useEffect } from "react";
import {txt,txtpt} from '../../assets/lorem';

const normalFt = (<a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  Made with ❤️ by  gjm
</a>);



export default function Home() {
  const [urlvideo, setUrlvideo] = useState('____');
  const [tempo,setTempo] = useState({minuto:0,segundo:0});
  const [urlModif,setUrlModif] = useState('');
  const [Footinho,setFootinho] = useState(normalFt);
  const [Falli,setFalli] = useState(()=>{})
  function copyBoard (result){
  
    if((result.state=='granted')||
    result.state=='prompt'){           
      navigator.
      clipboard.readText().then((cip) => 
        {setUrlvideo(cip);})
         .then(()=>{
          //adiciona tempo
              });
         
   }
  }
  function adicionaTempo(){
    let tmp= parseInt(tempo.minuto)+parseInt(tempo.segundo);
    let url="";
    if(urlvideo.search("youtube")!==-1){//se encontrou youtube 
      url=urlvideo+'&feature=youtu.be&t='+tmp;
      setUrlModif(url);
      openLink(url);}
      else 
      if(urlvideo.search("youtu.be")!==-1){
//        alert("//se encontrou youtu.be");
        url=urlvideo+'?t='+tmp;
        setUrlModif(url);
        openLink(url);
      }
        else
          setFootinho(<h2>Digite uma url do youtube</h2>)

  }
  function openLink (url) {
    //var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
        var win = window.open(url, "youtube");
    
  //  navigator.clipboard.writeText(urlModif).then(()=>{console.log('g')});
     
  }
  function falbck(){
    return(
      <TextField
            id="standard-basic" name="min"
            label="URL" onChange={({target:{value}})=>
            setUrlvideo(value)}  />
    )
  }
  useEffect(()=>{
    window.addEventListener("error", function (e) {
      alert("Error occurred: " + e.error.message);
      return false;
   })
    navigator.permissions.query({name:'clipboard-read',
      allowWithoutGesture: false}).then(
        (result)=>{
          copyBoard(result);
        }
      )
      .catch(function (e){
        setFootinho(<h2>Só funciono no Chrome :(</h2>)
        setFalli(falbck);
      })
      .then(function(){
        //alert('esse é o finaly');
      })
      ;
    
  },[urlvideo,tempo])
 
  
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Clock shared</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          {urlModif}
        </h1>
         
        <div className={styles.grid}>
        {Falli}
              
          <a  className={styles.card}>
              <TextField
            id="standard-basic" name="min"
            label="Minutos" onChange={({target:{value}})=>setTempo({
              segundo:tempo.segundo, minuto:value*60
            })}  />

            <TextField
              id="standard-basic"
              label="Segundos" name="seg"                         
              onChange={({target:{value}})=> setTempo(
                {segundo:value,minuto:tempo.minuto}) }  
                onBlur={adicionaTempo}        
            />
            
          </a>
          <a  className={styles.card}>{txt}
          
            </a>
            <a  className={styles.card}>{txtpt}
          
            </a>

        </div>
      </main>
     <div className={styles.difoter}>
      <footer className={styles.footer}>
        {true?Footinho:''}
      </footer>
      </div>
    </div>
  );
}
