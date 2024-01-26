
const COOLTEXT = document.getElementById('cooltext')
const COOLTEXT_YES1 = document.getElementById('cooltext_yes1')
const COOLTEXT_YES2 = document.getElementById('cooltext_yes2')



const TYPE1 = document.getElementById('type1')
const TYPE2 = document.getElementById('type2')
const TYPE3 = document.getElementById('type3')
const TYPE4 = document.getElementById('type4')

const HBT = document.getElementById('hbt')
const BAR = document.getElementById('bar')
const PTITTXT = document.getElementById('ptittexte')

let i = 0;


temps = false;
let timer1 = 0;
let timer2 = 0;

const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Comic Sans MS",
    "Trebuchet MS",
    "Arial Black",
    "Impact",
    "Lucida Console",
    "Tahoma",
    "Palatino Linotype",
    "Garamond",
    "Book Antiqua",
    "Arial Narrow",
    "Century Gothic",
    "Lucida Sans Unicode",
    "Arial Rounded MT Bold",
    "Gill Sans",
    "Franklin Gothic Medium",
    "Cambria",
    "Rockwell",
    "Candara",
    "Arial Unicode MS",
    "Calibri",
    "Consolas",
    "Monaco",
    "Lucida Grande",
    "Baskerville",
    "Copperplate",
    "Optima",
    "Brush Script MT",
    "Futura",
    "Didot",
    "American Typewriter",
    "Bodoni",
    "Avant Garde",
    "Cochin",
    "Curlz MT",
    "Eurostile",
    "Felix Titling",
    "Goudy Old Style",
    "High Tower Text",
    "Jokerman",
    "Mistral",
    "Old English Text MT",
    "Papyrus",
    "Perpetua",
    "Ravie",
    "Stencil",
    "Wide Latin"
];




test();

function test() {

    if (temps == false) {
        timer1 = 5000;
        timer2 = 1000;
    } else {
        timer1 = 0;
        timer2 = 0;
    }
}

coolmode();

function coolmode() {

    // Change the stylesheet to the cool stylesheet
    setTimeout(function() {
        COOLTEXT.classList.remove("invisible");
        COOLTEXT.classList.add("visible");
        COOLTEXT.style.opacity = "1";

        setTimeout(function() {
            COOLTEXT_YES1.classList.remove("invisible");

            setTimeout(function() {
                COOLTEXT_YES2.classList.remove("invisible");
            }, timer2);
        }, timer1);
    }, timer1);
}

// FIN ENTRE ACTE
let audio = document.getElementById('backgroundMusic');

function yes() {
    COOLTEXT_YES2.classList.add("invisible");
    COOLTEXT_YES1.classList.add("invisible");
    COOLTEXT.classList.add("invisible");

    audio.volume = 0.02;
    audio.play();



    
    //element.style.setProperty('--animation-duration', '2s');
    //element.style.setProperty('--animation-steps', '20');
   

    incrementMusicVol();


    setTimeout(function() {
        TYPE1.classList.add("invisible");
        TYPE2.classList.add("invisible");
        TYPE3.classList.add("invisible");
        TYPE4.classList.add("invisible");

        
        setTimeout(main(), 690);

    }, 24350);

    
}





function main() {
    let e = 0;
    let i = 0;

    setTimeout(function() {
        HBT.classList.remove("invisible");
        
        setInterval(function() {
            let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            HBT.style.fontFamily = randomFont;
        }, 200);

        document.body.style.backgroundColor = "#204646";

        //document.documentElement.style.setProperty('--background', '#new-color');

        setTimeout(function() {
            BAR.classList.remove("invisible");

            setTimeout(function() {
                PTITTXT.classList.remove("invisible");
                
            }, 5500);


        }, 5630);
    }, 690);
}


























function incrementMusicVol() {
    if (i < 30) {
        setTimeout(function() {
            audio.volume += 0.01;
            i++;
            incrementMusicVol();
        }, 1000);
    }
}

// MUSIC

document.getElementById('backgroundMusic').addEventListener('click', function(event) {
    console.log(event.target.id);
});



// Path: rest/js/birth.js

