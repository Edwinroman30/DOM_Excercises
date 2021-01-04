
const UA = navigator.userAgent;

export default function info_device(device_data){
    
    const $info_user = document.getElementById(device_data);

    const isDesktop = {

        Linux: () => UA.match(/linux/i),
        Windows: () => UA.match(/windows nt/i),
        Mac: () => UA.match(/mac os/i),
        Any: function (){
            return this.Linux() || this.Windows() || this.Mac();
        }
    };

    const isMovile = {

        Android: () => UA.match(/android/i),
        iOS: () => UA.match(/iphone|ipad|ipod/i),
        Windows: () => UA.match(/windows phone/i),
        Any: function (){
            return this.Android() || this.iOS() || this.Windows();
        }
    };

    const isBrowser = {
        chrome: () =>  UA.match(/chrome/i),
        firefox: () => UA.match(/firefox/i),
        edge: () => UA.match(/edge/i),
        safari: () => UA.match(/safari/i),
        opera: () => UA.match(/opera|opera mini/i), 
        Any: function(){
            return this.chrome() || this.firefox() || this.edge() || this.safari() || this.opera();
        }

    };


    //console.log(isDesktop.Linux())

    $info_user.innerHTML = `
    <ul>
    <li><b>All information: </b> ${UA}</li>
    <hr>
    <li><b>Platform: </b>${isMovile.Any()? isMovile.Any() : isDesktop.Any()}</li>
    <hr>
    <li><b>Browser: </b>${isBrowser.Any()? isBrowser.Any(): 'Unknow Browser'}</li>
    </ul>
    `;


    //Contenido especial:

    if(isDesktop.Linux())
        console.log('Contenido especial: Felicitaciones hoy en es aniversario LINUX.')

    //Redireccionar:
    
    if(isMovile.iOS())
        location.href = `http://ecompute3003.rf.gd/`; 
    

}