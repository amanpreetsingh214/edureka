var radiolow = document.getElementById("low2high");
var radiohigh = document.getElementById('high2low')
var apply = document.getElementById("apply");
var firstresult = document.querySelector('.first-result');
var secondresult = document.querySelector('.second-result');
var body = document.querySelector('body');


var cons=()=>alert('working');
var replace=()=>{
    firstresult.replaceWith(secondresult,firstresult);
}
var replace2=()=>{
    secondresult.replaceWith(firstresult,secondresult);
}

radiolow.addEventListener('click', replace);
radiohigh.addEventListener('click', replace2);

// apply.addEventListener('click',function(){
//     if (radiolow.checked){
//         firstresult.replaceWith(secondresult,firstresult);
//         secondresult.replaceWith(firstresult,secondresult);
//         body.style.backgroundColor='green';
//         // radiolow.addEventListener('click', replace);
//         // alert('done')
//     }
//     else{
//         console.log('Not done');
//     }
// })


