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




document.addEventListener('click', function() {
    let audio = document.getElementById('backgroundMusic');
    audio.volume = 0.02;
    document.getElementById('backgroundMusic').play();
});



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
            let rep = prompt("Are you excited ? (y/n)")
            if (rep == "y") {
                let eq = prompt("Well i hope so, but first, solve for 'i' : 9x- 7i < 3 (3x -7u), then write down the solution (no space, like '3x<5', and 'i' on the left side)")
                if (eq == "i<3u") {
                    alert("Wow... thanks but don't try to charm me thats flattering, i'm not an easy girl....")
                    let rep2 = prompt("Anyway, to start the birthday just say the name of ur fav dog")
                    if (rep2.toUpperCase() == "MIKI") {
                        alert("U GOT IT RIGHT LETS GET ITTTTT")
                        alert("have fun :)")
                        window.location.href = "birthday.html";
                    }
                    else if (rep2.toUpperCase() == "MATIS" || rep2.toUpperCase() == "MATISSE") {
                        alert("That's mean..... again.... it was miki.... BUT U GOT IT RIGHT STILL LETS GOOOOOO")
                        alert("have fun :)")
                        window.location.href = "birthday.html";
                    }
                    else {
                        alert("Nope... not this one...")
                    }
                } else {
                    alert("Not quite, you should try harder... or ask a guy who knows how to do it... no person in mind...")
                }
            } else if (rep == "n") {
                alert("Well, that's sad, come back when u are :(")
            } else {
                alert("I don't got it, come back when u are excited :(")
            }


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








function thx() {
    WOWCODE.classList.toggle("visible");
    THX.classList.remove("visible");
    setTimeout(function() {
    FINAL.innerHTML = "No problem, always a pleasure...<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Isn't it weird that, despite the fact that we don't talk now, this seems to be the closest contact we've ever had ?  "
    setTimeout(function() {
    FINAL.innerHTML += "<strong>(yet)</strong><br>"
    setTimeout(function() {
    FINAL.innerHTML += "idk, crazy, right ?...<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Anyway"
    setTimeout(function() {
    FINAL.innerHTML += "."
    setTimeout(function() {
    FINAL.innerHTML += "."
    setTimeout(function() {
    FINAL.innerHTML += ".<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Remember when you said you wanted a website for your birthday ? because i do<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Let's just wait, even if it's well made, it's not me who talk so.... Be patient <3<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Also, you can click on the 'Soon ur birthday eh ?' to toggle the timer without seeing this horrible act of schizophrenia...<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Last thing, u should think about that : solve for 'i' : 9x- 7i < 3 (3x -7u)<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Real last thing, apparently it's hard these days, but it will go better and yk it, i'm 100% with you and believe in you getting up, u strong kučka <br>"
    setTimeout(function() {
    FINAL.innerHTML += "No need to wait now...<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Well yes i lied and what about it<br>"
    setTimeout(function() {
    FINAL.innerHTML += "Stay strong tea <3<br><br>"
    setTimeout(function() {
    FINAL.innerHTML += "ur fav french :3"
    }, 1000); // end
    }, 10000); // Stay
    }, 10000); // Well
    }, 10000); // No need to wait
    }, 3000); // Real last thing
    }, 3000); // Last
    }, 5000); // Also
    }, 5000); // Let's
    }, 3000); // Remember
    }, 2000); // .
    }, 2000); // .
    }, 2000); // .
    }, 5000); // anyway
    }, 5000); // idk
    }, 5000); // yet
    }, 5000); // Do you
    }, 500); // No problem
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




document.getElementById('backgroundMusic').addEventListener('click', function(event) {
    console.log(event.target.id);
});




















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