document.getElementById("sec").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     document.getElementById("but").click();
    }
  });
  
function getSeconds() {
    var s = document.getElementById('sec').value;
    validate(s)
}

function validate(seconds) {
    // validating seconds

    if (!parseInt(seconds) || !parseFloat(seconds)) {
        console.log('[!] Not a number!')
    }
    else {
        if (seconds.includes('.')) {
            seconds = parseFloat(seconds)
        }
        else {
            seconds = parseInt(seconds)
        }
        getMinsAndSeconds(seconds)
    }
}

function getMinsAndSeconds(seconds) {
    document.title = seconds + " Seconds to Minutes and Seconds"
   
    var mins = Math.floor(seconds / 60)
    var secs = seconds % 60

    // consolelog 
    console.log(mins, ' minutes and ', secs, ' seconds.')
    document.getElementById('ans').innerText = + mins + " minutes and " + secs + " seconds"
}
