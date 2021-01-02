export default function net_Status(){

    let timer;

    
    const netTester = () => {
       
    const $info_net = document.createElement("div")
        
      if(navigator.onLine){
            $info_net.textContent = "Se ha establecido la conexión con éxito"
            $info_net.classList.remove('net_offline')
            $info_net.classList.add('net_online')
      }else
      {
           $info_net.textContent = "Se ha perdido la conexión"
           $info_net.classList.remove('net_online')
            $info_net.classList.add('net_offline')
      }

      document.body.insertAdjacentElement("afterbegin",$info_net)

      timer = setTimeout(()=>{
          document.body.removeChild($info_net);
        },2000)

    }

    window.addEventListener("online", (e) => {
        netTester()
    })

     window.addEventListener("offline", (e) => {
        netTester()
    })

    clearTimeout(timer);

}