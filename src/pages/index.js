import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [urlvideo, setUrlvideo] = useState('____');
  const [tempo,setTempo] = useState({minuto:0,segundo:0});
  const [urlModif,setUrlModif] = useState('');

  useEffect(()=>{
    navigator.
    clipboard.readText().then((cip) => 
      {
       setUrlvideo(cip);
        }
        ).then(()=>{

          let tmp=
            parseInt(tempo.minuto)
            +parseInt(tempo.segundo);
          setUrlModif(''+urlvideo+'?t='+tmp);
          
        }
        )

  },[urlvideo,tempo])
 
  
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          {urlModif}
        </h1>
         
        <div className={styles.grid}>
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
            />
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
