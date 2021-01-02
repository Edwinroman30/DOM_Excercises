export default function Webcam_detection(id_video){

    const $screen = document.getElementById(id_video);
    const $error_catched = document.createElement("mark");

    if(window.navigator.mediaDevices.getUserMedia){
       
        //Los constraints son las restricciones o reglas.
        const constraints = {video: true, audio: false};
        const media = navigator.mediaDevices.getUserMedia(constraints);

        media
        .then((stream) => {
            $screen.srcObject = stream;
            $screen.play();          
            $screen.setAttribute("controls","true")
        })
        .catch((err) => {
            $error_catched.textContent = err;
            $screen.insertAdjacentElement("beforebegin",$error_catched)
            console.error(err);  
        })

    }

}