let username=document.getElementById("inp");

let newkid=document.getElementById('newkid')

let submitbtn=document.getElementById('submitbtn');

function validation(){
   if(username.value !="" && username.value.includes('@gmail.com')){
        let li=document.createElement('li');
        li.innerText=username.value;
        newkid.append(li);
    alert("your detailessaved sucessefullt=y")}
    else{
        alert("please input check");
    }

    }
// if(username.value !="" && pasword.value !=""){
//     alert("Your detailes saved sucessfully");
//              }
// else{
//     alert("please enter your data");    }
// }

// document.addEventListener(onclick,validation());
submitbtn.onclick=validation ;