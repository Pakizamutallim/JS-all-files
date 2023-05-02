// function sum(){
//     const num = document.getElementById("number").innerHTML 
//     document.getElementById("btn"); 
    
// } 



let s = 0 
let m = 0
let h = 0

const buton = document.getElementById("btn"); 
const sec = document.getElementById("second"); 
const min = document.getElementById("minute");
const hour = document.getElementById("hour"); 

function sum() {
    if (s==9) {
        s=-1; 
        if (m == 2) {
            m=-1
            h+=1 
            hour.innerText = h
        }
        m +=1; 
        min.innerText = m
    }
    s= s+1 ; 
    sec.innerText = s 
}
const a = setInterval(sum, 20) 
 function stoptimer() {
    clearInterval(a)
 }
 function contimer() {
    stoptimer(a)
    a = setInterval(sum,20)
 }






