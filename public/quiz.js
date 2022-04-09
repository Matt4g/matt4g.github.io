let q2 = document.getElementsByName('q2');
let q3 = document.getElementsByName('q3');
let q4 = document.getElementsByName('q4');
let q5 = document.getElementsByName('q5');

function submitAnswer() {

    let q1 = document.getElementsByName('q1');
    var val1= "";
    for (var i = 0, length = q1.length; i < length; i++) {
        if (q1[i].checked) {
           val1 = q1[i].value; 
           break;
         }
    }
    
    if (val1 == "" ) {
     document.getElementById('ta1').innerText = 'please select choice answer';
    } else if ( val == "B. Bridge 4" ) {
      'Answer is correct !'
    } else
     {
      alert('Answer is wrong');
    }
  };
