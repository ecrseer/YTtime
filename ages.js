navigator.permissions.query({name:'clipboard-read',
      allowWithoutGesture: false}).then(result=>
           result.state=='granted'||'prompt'?
           '':'')
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