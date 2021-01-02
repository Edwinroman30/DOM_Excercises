export function regressiveCount(id,fecha,goal_message,message_out) {

    const $Regresiveclock = document.querySelector(id);
    const $goal_element = document.getElementById('goalClock');
    let date = new Date(fecha).getTime();
    

    let Tempo = setInterval(() => 
    {
        
        let actualdate = new Date().getTime();

        // COnversiones
        let faltante =  date - actualdate,
        day = Math.floor(faltante / (1000*60*60*24)),
        hours =  ('0'+ Math.floor((faltante % (1000*60*60*24)) / (1000*60*60))).slice(-2),
        minutes = ('0'+ Math.floor((faltante % (1000*60*60)) / (1000*60))).slice(-2),
        seconds = Math.floor((faltante % (1000*60)) / (1000));

        if(faltante < 0){
            $goal_element.innerHTML = `<h3>${goal_message}</h3>`;
            $Regresiveclock.innerHTML = `<h3>${message_out}</h3>`;
            clearInterval(Tempo);

        }else{
            $goal_element.innerHTML = `<h3>${goal_message}</h3>`;
            $Regresiveclock.innerHTML = `<h3>Faltan ${day} dias ${hours} horas ${minutes} minutos ${seconds} segundo.</h3>`;
        }
        

        /*console.log(`Faltan ${day} dias ${hours} horas ${minutes} minutos ${seconds} segundo.`); */
    },1000);
   
}