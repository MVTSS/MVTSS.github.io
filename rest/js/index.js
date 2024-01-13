const COOLBUTTON = document.getElementById('COOLMODE');
COOLBUTTON.addEventListener('click', timer);
const TIMERBUT = document.getElementById('timer');
TIMERBUT.addEventListener('click', failtimer);
const MEAN = document.getElementById('mean');
MEAN.addEventListener('click', mean);

const THX = document.getElementById('thx');
THX.addEventListener('click', thx);
const WOWCODE = document.getElementById('wowcode');
WOWCODE.addEventListener('click', wow);






const BIGTEXT = document.getElementById('cooltext');
BIGTEXT.addEventListener("click", calctimer);   

const IMPATIENCE = document.getElementById('impatience');
const REPLY = document.getElementById('impatience');
const TIMER = document.getElementById('timerText');
const FINAL = document.getElementById('final');
const woohoo = document.getElementById('woohoo');
const WOW = document.getElementById('wow');


const TEOCOLOR0 = document.getElementById('teocolor');
const TEOCOLOR1 = document.getElementById('teocolor2');
const TEOCOLOR2 = document.getElementById('teocolor3');


let date = true;
let step = 0;


function timer() {

        // Check if the current date is before January 27, 2024 at 00:00
        const currentDate = new Date();
        const targetDate = new Date('2024-01-27T00:00:00');
        if ((currentDate < targetDate) && (date == true)) {

            TIMERBUT.innerHTML = "At least give me a timer....";
            MEAN.innerHTML = "јеби се моја курво.";

            COOLBUTTON.classList.toggle("visible")
            document.getElementById("impatience").innerHTML = "No it's not. Patience isn't a virtue, but a necessity, and you clearly need it.";
            TIMERBUT.classList.add("visible");
            MEAN.classList.add("visible");

        }
        else {
            woohoo.classList.add("invisible")
            coolmode();
        }

}

function calctimer() {
    TIMER.classList.add("visible");
    var x = setInterval(function() {

        // Check if the current date is before January 27, 2024 at 00:00
        const currentDate = new Date();
        const targetDate = new Date('2024-01-27T00:00:00');
        // Calculate the difference between the two dates
        const diff = targetDate - currentDate;

        // Convert the difference to hours, minutes, and seconds
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        TIMER.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s <br><br>";
        
    }, 1000);
}



function failtimer() {
    TIMERBUT.classList.toggle("visible")
    MEAN.classList.remove("visible")
    REPLY.innerHTML = "..."
    setTimeout(function() {
        REPLY.innerHTML = "Fine, i can give you that, let me code that...<br>"

        for (let i = 1; i <= 3; i++) {
            setTimeout(function() {
                REPLY.innerHTML += "🛠️";
            }, i * 2000); // i * 3000 représente l'attente de 3 secondes pour chaque itération
        }
        
        setTimeout(function() {
            
            REPLY.innerHTML += "<br><br> There you go, don't ask me more code tho....<br>"
            setTimeout(function() {
                REPLY.innerHTML += "I'll put it...<br>"

                setTimeout(function() {
                    REPLY.innerHTML += "Here<br>"
                    THX.innerHTML = "Thanks 👉👈"
                    WOWCODE.innerHTML = "Wow you can code ! can you write my name in different colors ?"
                    THX.classList.toggle("visible");
                    WOWCODE.classList.toggle("visible");
                    calctimer();
                }, 3000);

            }, 2000);
            
        },10000);



        
        
    }, 3000);

    
}










function mean() {
    REPLY.innerHTML = "I..."
    MEAN.classList.toggle("visible")
    TIMERBUT.classList.toggle("visible")
    
    setTimeout(function() {
        REPLY.innerHTML = "Well, why not... <br>"
        setTimeout(function() {
            REPLY.innerHTML += "but that's mean..."
            TIMERBUT.classList.toggle("visible")
            TIMERBUT.innerHTML ="sorry... but can i get my timer pls ?"
        }, 3000);
        
        
    }, 3000);
}


function wow() {
    THX.classList.toggle("visible");
    WOWCODE.classList.toggle("visible");
    WOW.innerHTML = "Really ?...<br>";

    setTimeout(function() {
        TEOCOLOR0.innerHTML = "Teodora<br>";
        TEOCOLOR0.classList.toggle("colorname");
        WOWCODE.innerHTML = "And Tea ?";
        WOWCODE.classList.toggle("visible");
        WOWCODE.removeEventListener('click', wow);
        WOWCODE.addEventListener('click', nextStep);
    }, 3000);
}

function nextStep() {
    step++;
    WOWCODE.classList.toggle("visible");
    if (step === 1) {
        setTimeout(function() {
            TEOCOLOR1.innerHTML = "Tea <br>";
            TEOCOLOR1.classList.toggle("colorname");
            WOWCODE.innerHTML = "And my princess ?";
            WOWCODE.classList.toggle("visible");
        }, 3000);
    } else if (step === 2) {
        setTimeout(function() {
            TEOCOLOR2.innerHTML = "popuši mi kurac <br>";
            TEOCOLOR2.classList.toggle("colorname");
            WOWCODE.innerHTML = "Of course, I would love to (I have power over everything)";
            WOWCODE.classList.toggle("visible");
        }, 3000);
    } else if (step === 3) {
        setTimeout(function() {
            TEOCOLOR2.innerHTML += ":333 <br><br>";
            WOWCODE.innerHTML = "Anyway, thanks for the code";
            WOWCODE.classList.toggle("visible");
            WOWCODE.removeEventListener('click', nextStep);
            WOWCODE.addEventListener('click', thx);
        }, 3000);
    }
}



















function coolmode() {

    // Change the stylesheet to the cool stylesheet
    let stylesheet = document.getElementById('mainStylesheet');
    stylesheet.href = 'rest/css/styles.css';

    // Change the text to the cool text
    BIGTEXT.innerHTML = "Happy Birthday Teo!"

    // Change the button to the no button
    COOLBUTTON.style.display = "none";

}



// Path: rest/js/index.js