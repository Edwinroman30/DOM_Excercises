const d = document;

export function digitalClock(btn_activeck,container_id,btn_stopck) {
   let inttime;

    d.addEventListener('click', (e) => {
        if(e.target.matches(btn_activeck)){

            inttime = setInterval(()=>{
                d.querySelector(container_id).innerHTML = `${new Date().toLocaleTimeString()}`
            },1000);
            
            d.querySelector(btn_activeck).disabled = true;

        }

        if(e.target.matches(btn_stopck)){
            clearInterval(inttime)
            d.querySelector(btn_activeck).disabled = false;
        }

    });



}


export function Alarm(btn_activeAL,btn_disableAL,audioTag) {
    
    d.addEventListener('click', (e) =>{
        
        if(e.target.matches(btn_activeAL)){
            d.querySelector(audioTag).play();
            d.querySelector(btn_activeAL).disabled = true;
            d.d.querySelector(audioTag).loop = true;
        }

        if(e.target.matches(btn_disableAL)){
            d.querySelector(audioTag).pause();
            d.querySelector(btn_activeAL).disabled = false;
        }

    });

}