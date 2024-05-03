const mytext = document.getElementById("mytext");
const submit = document.getElementById("submit");
const warning = document.getElementById("warning");


let age;

submit.onclick = function(){
   age = mytext.value;
   age = Number(age);
   
    if (age >= 100){
       warning.textContent = `Your age should be between 18-99 years old!`;
   }
    else if (age >= 18){
        warning.textContent = `You are safe to visit this site.`;
    }
    
    else {
        alert(`Sorry, You can not visit this site!`);    
        warning.textContent = `Sorry, You can not visit this site!`;
    }
}
