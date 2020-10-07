import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import { useState, useCallback, useEffect } from "react";

function beibe(){
  return ''+pegaCtrl;
}
function menmin(){
  return 2+1;
}

async function pegaCtrl(){
 return await navigator.clipboard
      .readText()
      //.then(settingClipboard(cip))
      .then((it)=>{ return it;})
}


export default function Home() {
  const [urlvideo, setUrlvideo] = useState('pegaCtrl');
  const urlvideoTime = useCallback(
    (minuto)=>navigator.clipboard
    .readText().then(data=>setUrlvideo(data+'t='+minuto))
    ,[urlvideo]);
  const [minuto, setMinuto] = useState(menmin);
  const [segundo, setSegundo] = useState(0);
  const [handleChngTimer, sethandleChngTimer] = useState(0);

  function settingClipboard(cliper) {
    var titled = document.getElementById("her");
    titled.innerHTML = cliper;
    return titled.innerHTML;
  }

  const pegaCtrlCC = () => {
    
  };

  useEffect(
    ()=>{
      urlvideoTime(minuto);
    }, [minuto]);
  return (
    <div className={styles.container}>
      <Head>
        <title id="her">Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{urlvideoTime}</h1>
        <TextField
          id="tes"
          name="min"
          label="Minutos"
          onMouseLeave={({ target }) => setMinuto(target.value)}
        />

        <TextField
          id="standard-basic"
          label="Segundos"
          name="seg"
          onMouseLeave={({ target }) => setSegundo(target.value)}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={urlvideo}
          style={{ width: "100%" }}
        />
        <button onClick={pegaCtrl}>some</button>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
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
