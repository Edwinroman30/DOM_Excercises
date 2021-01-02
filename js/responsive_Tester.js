export default function responsive_Tester(form){

    const $form = document.getElementById(form)
    let ventana;


    $form.addEventListener("submit", (e) => {

        e.preventDefault();

       ventana = window.open
        (
           $form.direction.value,
            "Ventana",
            `width=${$form.w_width.value},height=${$form.w_height.value},scrollbars=NO`
        );

    });

    document.addEventListener("click", (e)=>{

        //Aprendi una nueva forma de acceder a los elementos de los formularios (ojo tienen que ser elementos de formularios).
        //Esta forma es equivalente a: e.target.matches();

        if($form.btn_close === e.target){
            ventana.close();
        }
    });



}