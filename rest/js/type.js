document.getElementById("cooltext_yes1").addEventListener('click', go);
document.getElementById("cooltext_yes2").addEventListener('click', go);



const TEXT1 = document.getElementById('type1')
const TEXT2 = document.getElementById('type2')
const TEXT3 = document.getElementById('type3')
const TEXT4 = document.getElementById('type4')


function go(){
    console.log("go")
    setTimeout(function() {
    // array with texts to type in typewriter
    let e = 0;
    var dataTime = [5400, 5370, 5230, 4620]
    var dataText = [ "Initializing the birthday...", "Boop bip boop...", "You could say I do too much...", "And you would be right."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {


        switch (e) {
            case 0:
                // add next character to h1
                TEXT1.innerHTML = "Matis#> " + text.substring(0, i+1) ;
                break;
            case 1:
                // add next character to h2
                TEXT2.innerHTML = "Matis#> " + text.substring(0, i+1);
                break;
            case 2:
                TEXT3.innerHTML = "Matis#> " + text.substring(0, i+1);
                break;
            case 3:
                TEXT4.innerHTML = "Matis#> <strong>" + text.substring(0, i+1) +'</strong>';
                break;
            default:
                break;
        }
        
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, (dataTime[e] - ((text.length+2) * 100)));
        e += 1;
        console.log(dataTime[e])
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 10);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length && (e < dataTime.length)) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    if (!(typeof dataTime[e] == 'undefined')){
      StartTextAnimation(0);
    }
    
    }, 4000);
};
