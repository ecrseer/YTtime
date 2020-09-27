import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import { useState, useCallback } from "react";

export default function Home() {
  const [urlvideo, setUrlvideo] = useState('____');
  const [minuto,setMinuto] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const chng = ({ target }) => {
    setUrlvideo(target.value);
  };
  
  
   const pegaCtrlC = useCallback(pegaCtrlCC,[minuto]);
   
   
   
   function pegaCtrlCC({target}){
    let arma = navigator.
      clipboard.readText().then((cip) => 
    { 
     tempoAtual(cip,target);       
    });
  }

  const tempoAtual = (cip,target)=>{
    if(target.name=='min') 
    setMinuto(target.value);
   else
    setSegundo(target.value);

   
   let tempoReal= 0;
   
   tempoReal = (minuto*60)+segundo;
   setUrlvideo(cip+"?t="+minuto);
    
  }
 
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <TextField
         id="standard-basic" name="min"
        label="Minutos" onChange={pegaCtrlC}  />

        <TextField
          id="standard-basic"
          label="Segundos" name="seg"
          onChange={pegaCtrlC}  
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={urlvideo}
          style={{width:"100%"}}
        />

        <p className={styles.description}>
          Get started by editingg
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
