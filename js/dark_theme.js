export function dark_Mood(btn) {
    
    const $btn_dark_theme = document.querySelector(btn);
    const $selector_data = document.querySelectorAll('[data-darkTheme]');
    let moon = '🌙';
    let sun = '🌕';

    const darkTheme = () => {
        $selector_data.forEach((elem) => elem.classList.add('dark_bk'));
        $btn_dark_theme.textContent = sun;
        $btn_dark_theme.setAttribute("style","background-color: var(--main-color);");
        localStorage.setItem('theme','dark');
    }

    const lightTheme = () => {
        $selector_data.forEach((elem) => elem.classList.remove('dark_bk'));
        $btn_dark_theme.textContent = moon;
        $btn_dark_theme.setAttribute("style","background-color: var(--second-color);");
        localStorage.setItem('theme','light');
    }


    document.addEventListener("click", (e) => {

        if(e.target.matches(btn))
        {
             //console.log($selector_data,$btn_dark_theme.textContent);

             if($btn_dark_theme.textContent === moon)
                darkTheme(); 
             else
                lightTheme();
             
        }
    });


    document.addEventListener('DOMContentLoaded', (e) => {

        if(localStorage.getItem('theme') === null)
        {
            localStorage.setItem('theme','light');
        }

        if(localStorage.getItem('theme') === 'light')
            lightTheme();
        if(localStorage.getItem('theme') === 'dark')    
            darkTheme();
    })
   
}

