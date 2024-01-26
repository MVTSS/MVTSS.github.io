
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes("birthday.html")) {
        console.log("birthday.html")
        document.body.style.backgroundColor = "#1ab3b3";
    
        
        document.documentElement.style.setProperty('--primary-color', '#16a083');
        document.documentElement.style.setProperty('--secondary-color', '#1ab3b3');
        document.documentElement.style.setProperty('--box-shadow', '#1ab3b3');
        document.documentElement.style.setProperty('--background', '#138686');
        document.documentElement.style.setProperty('--hoverlink', '#173838');
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--font-family', '"Poppins", sans-serif');
    
    
        /*
        --primary-color: #16a083;
        --secondary-color: #117964;
        --box-shadow: #1ab3b3;
        --background: #138686;
        --hoverlink: #173838;
        --black-color: #000;
        --font-family: "Poppins", sans-serif;
        */
    
    } else if (window.location.pathname.includes("message.html")) {
        console.log("message.html")
        document.body.style.backgroundColor = "#a750af";

        document.documentElement.style.setProperty('--primary-color', '#3f2145');
        document.documentElement.style.setProperty('--secondary-color', '#5e3267');
        document.documentElement.style.setProperty('--box-shadow', '#7e428a');
        document.documentElement.style.setProperty('--background', '#5e3267');
        document.documentElement.style.setProperty('--hoverlink', '#173838');

    
    /*
        --primary-color: #3f2145; 
        --secondary-color: ##5e3267;
        --box-shadow: #7e428a;
        --background: #5e3267;
        --hoverlink: #173838;
        --black-color: #000;
        --font-family: "Poppins", sans-serif;
        */
    
    
    } else if (window.location.pathname.includes("surprise.html")) {
        console.log("surprise.html")
        document.body.style.backgroundColor = "#2f9d41";

        document.documentElement.style.setProperty('--primary-color', '#2f9d41');
        document.documentElement.style.setProperty('--secondary-color', '#0c2710');
        document.documentElement.style.setProperty('--box-shadow', '#0c2710');
        document.documentElement.style.setProperty('--background', '#0c2710');
        document.documentElement.style.setProperty('--hoverlink', '#2f9d41');
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--font-family', '"Poppins", sans-serif');



    } else if (window.location.pathname.includes("halloffame.html")) {
        console.log("halloffame.html")
        document.body.style.backgroundColor = "#000";

        document.documentElement.style.setProperty('--primary-color', '#6e6e6e');
        document.documentElement.style.setProperty('--secondary-color', '#6e6e6e');
        document.documentElement.style.setProperty('--box-shadow', '#6e6e6e');
        document.documentElement.style.setProperty('--background', '#6e6e6e');
        document.documentElement.style.setProperty('--hoverlink', '#6e6e6e');
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--font-family', '"Poppins", sans-serif');
    }

    
    }, false);


    //#6e6e6e