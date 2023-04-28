    // var check = false;
    // var say = 0;
    // var myarray = [eli, veli, pirveli, hesen, gelin, nefer]; 
    // myarray.includes("eli");
    // if (check = true) {
    //     say++;
    //     console.log(); 
    // }
    

// let student = ["anar", "zehra", "hesen", "zeyneb"];
// for (let i = 0; i < student.length; i++) {
//     console.log(student[i][2]);
// }
// student.forEach (value => console.log(value));



// var txt = [1, 2, 3, 4, 5]; 


// function click() {
//     students.push(inp.)
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//     }
// }


const box = document.querySelector ("input")
const lst = document.getElementsByClassName("list")
let users = []; 


function addlist() {
    if (box.value.trim() != "") {
        if (users.includes(box.value.trim())=== false)  {
            users.push(box.value.trim());
            box.value = "";
            addusers()
            console.log(users);
        }
        else{
            alert ("YENI AD")
        }
    } 
    else{
        alert ("yeni ad daxil et");
    }
}


function addusers() {
    let res1=users.reduce(
        (result, v1) => result += `<li>${v1}</li>`, ''
    ); 
    lst.innetHTML = res1; 
}




