


export default function Media_responsible(id,md,mode_phone,mode_desktop){

    let mediaqueryList = window.matchMedia(md);


    function Change_screen(m)
    {
        if(m.matches){
            document.querySelector(id).innerHTML = mode_desktop;
        }else{
            document.querySelector(id).innerHTML = mode_phone;
        }

       // console.log(mediaqueryList,'Se pasa de 1024: ' + m.matches)
    }

    mediaqueryList.addEventListener("change", Change_screen);

   Change_screen(mediaqueryList)

}