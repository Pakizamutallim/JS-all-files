

const box1 = document.querySelector;
const box2 = document.querySelector("input-color");
const sira = document.getElementsByClassName("list")

console.log(box1)

console.log (box2)






var people = []; 
function change() {
    if (box1.value.trim() != "") {
        people.push(box1.value.trim());
        console.log(box1.value); 
        alert()
    }


}
function write2list() {
    var nwc = people.reduce(
        (x, y) => x = x + `<Li> ${val}</Li>`, ''
    );
    sira.innetHTML = nwc 
}





// --------------------------------------------------------------------------

// let val

// val = window.document;
// val = document.all
// val = document.all.length
// val = document.all[3]; 
// val = document.head; 
// val = document.body; 
// val = document.anchors 
// val = document.URL; 
// val = document.domain; 
// val = document. title; 
// val = document.image ; 
// val = document.forms ; 
// val = document.forms[1]; 
// val = document.scripts 
// val = document.scripts[0];
// val = document.scripts[0].getAttribute 

// console.log(val)


// ------------------------------------------------------



// const inp = document.querySelector("input");
// const ls = document.getElementById("list");

// let students = [];
// function addArr(){
//     if(inp.value.trim() != "" )
//     {
//         if(students.includes(inp.value.trim().toLowerCase()) === false){
//             students.push(inp.value.trim().toLowerCase());
//             console.log(inp.value);
//             inp.value = "";
//             fillList();
//         }
//         else{
//             alert("Bu adda istifadeci var")
//         }
//     }
//     else{
//         alert("Nese daxil et")
//     }
// }
// function fillList(){
//     let res = students.reduce(
//         (result, val)=>result += `<li>${val}</li>`,''
//     );
//     ls.innerHTML = res;
// }