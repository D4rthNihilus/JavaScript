let character = document.getElementById('chrt');
let number = 1;
let clickCrash = document.getElementById('clcr');

function mudarPersonagem() {
    if (number==1){
        //Coco
        character.setAttribute("src", "https://media.tenor.com/CxqpJVkDXv8AAAAm/coco-bandicot.webp");
        number = 2;

    } else if (number==2) {
        //Aku Aku
        character.setAttribute("src", "https://media.tenor.com/eGy2mKHlD5cAAAA1/ooga-booga-goldberg.webp");
        number = 3;

    } else if (number==3) {
        //Cortex
        character.setAttribute("src", "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2xiZHp1N29neTY2ZGJqOWxvOG5sdTgzaXo1Njk4bnI0MTF1M202cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/FsawG3aiJwePsknLB5/source.gif");
        number = 4;

    } else if (number==4) {
        //Sonic
        character.setAttribute("src", "https://media.tenor.com/9yvXHMTiUcYAAAAm/sonic-the-hedgehog-dancing.webp");
        number = 5;

    } else if (number==5) {
        //Tails
        character.setAttribute("src", "https://media.tenor.com/s3LHTiBAoagAAAAm/sonic-mania-tails-the-fox.webp");
        number = 6;
    
    } else if (number==6) {
        //Knucles
        character.setAttribute("src", "https://media.tenor.com/Cy6wvOyqcl0AAAAm/ugandan-knuckles.webp");
        number = 7;

    } else if (number==7) {
        //Shadow
        character.setAttribute("src", "https://media.tenor.com/_gnsNCdpo4sAAAAm/shadow-hahaha.webp");
        number = 8;

    } else if (number==8) {
        //Amy Rose
        character.setAttribute("src", "https://media.tenor.com/zdyPfB8IK04AAAAm/sonic-hedgehog.webp");
        number = 9;

    } else if (number==9) {
        //Eggman
        character.setAttribute("src", "https://media.tenor.com/wXgoHmTx6_oAAAAm/eggman-running.webp");
        number = 10;

    } else if (number==10) {
        //Rayman
        character.setAttribute("src", "https://media.tenor.com/6-m72eKu6Q8AAAAm/rayman-rayman-legends.webp");
        number = 11;

    } else if (number==11) {
        //Mario
        character.setAttribute("src", "https://media.tenor.com/_uhTr_R8dDMAAAAm/mario-dance.webp");
        number = 12;

    } else if (number==12) {
        //Luigi
        character.setAttribute("src", "https://media.tenor.com/ECoxfxlj0FYAAAAm/luigi-mario-party.webp");
        number = 13;

    } else if (number==13) {
        //Peach
        character.setAttribute("src", "https://media.tenor.com/DWt7d7zapVcAAAAm/mario-kart-mario-kart-world.webp");
        number = 14;

    } else if (number==14) {
        //Daisy
        character.setAttribute("src", "https://i.pinimg.com/originals/f6/5a/d1/f65ad140c0db882e2d86772849452565.gif");
        number = 15;

    } else if (number==15) {
        //Bowser
        character.setAttribute("src", "https://media.tenor.com/OmEzUnxv7MsAAAAm/bowser-dance.webp");
        number = 16;

    } else if (number==16) {
        //Yoshi
        character.setAttribute("src", "https://media.tenor.com/eIoZmG3L4fYAAAAm/yoshi-yoshi-tv.webp");
        number = 17;

    } else if (number==17) {
        //Toad
        character.setAttribute("src", "https://media.tenor.com/azcgMMUGlesAAAAm/mario-party.webp");
        number = 18;

    } else if (number==18) {
        //Koopa
        character.setAttribute("src", "https://media.tenor.com/t5b9DtnnNc8AAAAm/koopa-bah-bah.webp");
        number = 19;
    
    } else if (number==19) {
        //Banjo
        character.setAttribute("src", "https://media.tenor.com/Aiqs_8jOO2IAAAAm/banjo-kazooie-super-smash-brothers-ultimate.webp");
        number = 20;

    } else if (number==20) {
        //Friday Night
        character.setAttribute("src", "https://media.tenor.com/c3vS3Kh-p5IAAAAm/bf-fnf.webp");
        number = 0;

    } else {
        //Crash
        character.setAttribute("src", "https://media.tenor.com/E8SSBCl5b14AAAAm/crash.webp");
        number = 1;
    }

    clickCrash.style.display='none';
}
