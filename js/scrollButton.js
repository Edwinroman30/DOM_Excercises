
const w = window;

export  function scroll_T(btn_up){
    
    const $btn_scroll = document.querySelector(btn_up);


        w.addEventListener("scroll", (e) => {
            //Propiedad que detectan el distanciamiento del Scroll.
             let scroll_Size = w.pageYOffset || document.documentElement.scrollTop;
        
                if(scroll_Size > 700){
                    $btn_scroll.classList.remove("hide_scroll");
                }else{
                    $btn_scroll.classList.add("hide_scroll");
                }

        });

        document.addEventListener("click", (e) => {

            if(e.target.matches(btn_up))
            {
                document.documentElement.scrollTop = 0;
            }
        });

}