function altInc() {
    window.alert('ALTERNATIVA INCORRETA!');
}

let scharacter = 2;
let ccharacter = 2;

function mudarSonic() {
    let sonic = document.getElementById("sonic");

    if (scharacter == 2) {
        //Tails
        sonic.setAttribute("src", "https://media.tenor.com/s3LHTiBAoagAAAAm/sonic-mania-tails-the-fox.webp");
        sonic.style.width = '80px';
        scharacter = 3;

    } else if (scharacter == 3) {
        //Knuckles
        sonic.setAttribute("src", "https://media.tenor.com/rBXbhw-NgTIAAAAm/knuckles-the-echidna.webp");
        sonic.style.width = '62px';
        scharacter = 4;

    } else if (scharacter == 4) {
        //Shadow
        sonic.setAttribute("src", "https://media.tenor.com/_gnsNCdpo4sAAAAm/shadow-hahaha.webp");
        sonic.style.width = '70px';
        scharacter = 5;

    } else if (scharacter == 5) {
        //Amy Rose
        sonic.setAttribute("src", "https://media.tenor.com/zdyPfB8IK04AAAAm/sonic-hedgehog.webp");
        sonic.style.width = '60px';
        scharacter = 6;

    } else if (scharacter == 6) {
        //Eggman
        sonic.setAttribute("src", "https://media.tenor.com/XWAo6sQrogcAAAAm/eggman-running-2.webp");
        sonic.style.width = '80px';
        scharacter = 1;

    } else {
        //Sonic
        sonic.setAttribute("src", "https://media.tenor.com/9yvXHMTiUcYAAAAi/sonic-the-hedgehog-dancing.gif");
        sonic.style.width = '50px';
        scharacter = 2;
    }

}

function mudarCrash() {
    let crash = document.getElementById("crash");

    if (ccharacter == 2) {
        //Coco
        crash.setAttribute("src", "https://media.tenor.com/CxqpJVkDXv8AAAAm/coco-bandicot.webp");
        ccharacter = 3;
        crash.style.width ='110px;'

    } else if (ccharacter == 3) {
        //Aku Aku
        crash.setAttribute("src", "https://media1.tenor.com/m/eGy2mKHlD5cAAAAC/ooga-booga-goldberg.gif");
        ccharacter = 4;
        crash.style.width = '60px';
        crash.style.paddingTop= '10px';

    } else if (ccharacter == 4) {
        //Cortex
        crash.setAttribute("src", "https://media3.giphy.com/media/FsawG3aiJwePsknLB5/200w.gif");
        ccharacter = 5;
        crash.style.width = '90px';


    } else if (ccharacter == 5) {
        //Rayman
        crash.setAttribute("src", "https://media.tenor.com/qx_uYUzrJgoAAAAj/rayman.gif");
        ccharacter = 6;
        crash.style.width = '70px';

    } else if (ccharacter == 6) {
        //Nina
        crash.setAttribute("src", "https://media.tenor.com/XWAo6sQrogcAAAAm/eggman-running-2.webp");
        ccharacter = 1;

    } else {
        //Crash
        crash.setAttribute("src", "https://media.tenor.com/SBX3BS-L1msAAAAm/baile-crash.webp");
        crash.style.width = '100px';
        ccharacter = 2;
    }
}
