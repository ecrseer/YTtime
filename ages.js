navigator.permissions.query({name:'clipboard-read',
      allowWithoutGesture: false}).then(result=>{

           if(result.state=='granted'||
                result.state=='prompt'){           
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
              }
            }
               )
      )

      navigator.share(
        {
        url:urlModif,
        /* text:`Total de Casos:${cases} `,
        title:`covid do pais ${country}` */
  
        }
      )