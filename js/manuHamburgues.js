/* const $list = document.getElementById("list"),
$hamburger = document.getElementById("hamburger");

$hamburger.addEventListener("click", (e)=>{
    $list.classList.toggle("list_out");
});

 */

const d = document;

 export default function menuHumburger(btnpanel,panel,link_menu){
    

        document.addEventListener('click', (e)=>{
            if(e.target.matches(btnpanel) || e.target.matches(`${btnpanel} *`)){
                d.querySelector(panel).classList.toggle('panel-is-actived');
                d.querySelector(btnpanel).classList.toggle('is-active');
            }

            if(e.target.matches(link_menu)){
                d.querySelector(panel).classList.remove('panel-is-actived');
                d.querySelector(btnpanel).classList.remove('is-active');
            }
        });
 }