// alert()

function removeElement() {
    var arraytest = [2, 3, 4, 8, 6];
    this.remove=function (num){
        arraytest[arraytest.length--] = num;
        return arraytest; 
    }
}

var arraytest1 = new removeElement();
var arraytest2 = new removeElement();

console.log(arraytest1.remove()); 