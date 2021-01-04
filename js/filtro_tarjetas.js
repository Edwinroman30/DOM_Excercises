export default function cardsFilter(id_cards,id_search){
    const $id_search = document.getElementById(id_search)
   
    $id_search.addEventListener('keyup', (e) =>{

       document.querySelectorAll(id_cards).forEach((element) => {
            
           
        if(e.key == "Escape") 
            e.key = ""

          if(element.textContent.toLocaleLowerCase().includes(e.key)){
              element.classList.remove('hidden');
            }
            else{
                element.classList.add('hidden');
            }

            if($id_search.value === "")
            element.classList.remove('hidden');

       })
    });

}