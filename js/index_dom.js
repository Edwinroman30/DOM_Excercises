import menuHumburger from './manuHamburgues.js';
import {digitalClock,Alarm} from './reloj.js';
import {moveBox,shortCuts} from './eventos_teclado.js'
import {regressiveCount} from "./regressiveCount.js";
import {scroll_T} from "./scrollButton.js";
import {dark_Mood} from "./dark_theme.js";
import Media_responsible from './responsible_desing.js';
import responsive_Tester from './responsive_Tester.js';
import info_device from './user_Agent.js';
import net_Status from './network_status.js';
import Webcam_detection from './deteccion_webcam.js';


document.addEventListener('DOMContentLoaded', (e) =>
{
    menuHumburger('.btn-panel','.panel','.menu a');
    digitalClock('#activar_reloj','#reloj','#desactivar_reloj');
    Alarm('#activar_Alarma','#desactivar_Alarma','#audiotag');
    regressiveCount('#regresiveClock','Nov 17, 2020 20:00:00','Nex to the exam POMA and ABI','Today is a great day 👌🎉');
    scroll_T(".scroll_btn");

    Media_responsible(`#youtube`,
    "(min-width:1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc">Ver en la APP de You Tube</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    Media_responsible(`#google_Map`,
    "(min-width:1024px)",
    `<a href="https://g.page/ITFAM?share">Ver en la APP de Google Maps</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14702.60177898906!2d-69.88330423148969!3d18.512844163575767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb556c6dd04519c64!2sFabio%20Mota%20Technological%20Institute!5e0!3m2!1sen!2sdo!4v1607529816611!5m2!1sen!2sdo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

    responsive_Tester("form");
    info_device("info_device");
    Webcam_detection('screen_caption')
});

document.addEventListener("keydown", (e) =>
{
    moveBox(e,'#stage','#circle');
    shortCuts(e,'Terms and conditions: there is not terms just test mi app :)')
});

dark_Mood(".btn_theme_dark");
net_Status();