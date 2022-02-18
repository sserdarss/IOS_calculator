let ac = document.querySelector(".content1");
let minusPlus= document.querySelector(".content2");
let percent = document.querySelector(".content3");
let divide = document.querySelector(".content4");
let seven = document.querySelector(".content5");
let eight = document.querySelector(".content6");
let nine = document.querySelector(".content7");
let multiply = document.querySelector(".content8");
let four = document.querySelector(".content9");
let five = document.querySelector(".content10");
let six = document.querySelector(".content11");
let minus = document.querySelector(".content12");
let one = document.querySelector(".content13");
let two = document.querySelector(".content14");
let three = document.querySelector(".content15");
let plus = document.querySelector(".content16");
let zero = document.querySelector(".content17");;
let dot = document.querySelector(".content18");
let equal = document.querySelector(".content19");
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")
let total = "";
let sayi1 = "";
let sayi2 = "";
let operator = ""
zero.addEventListener("click", () => {
    sayi1 += "0";
    result1.value = sayi1;
    console.log(sayi1);
})
one.addEventListener("click", () => {
    sayi1 += "1";
    result1.value = sayi1;
    console.log(sayi1);
})
two.addEventListener("click", () => {
    sayi1 += "2";
    result1.value = sayi1;
    console.log(sayi1);
})
three.addEventListener("click", () => {
    sayi1 += "3";
    result1.value = sayi1;
    console.log(sayi1);
})
four.addEventListener("click", () => {
    sayi1 += "4";
    result1.value = sayi1;
    console.log(sayi1);
})
five.addEventListener("click", () => {
    sayi1 += "5";
    result1.value = sayi1;
    console.log(sayi1);
})
six.addEventListener("click", () => {
    sayi1 += "6";
    result1.value = sayi1;
    console.log(sayi1);
})
seven.addEventListener("click", () => {
    sayi1 += "7";
    result1.value = sayi1;
    console.log(sayi1);
})
eight.addEventListener("click", () => {
    sayi1 += "8";
    result1.value = sayi1;
    console.log(sayi1);
})
nine.addEventListener("click", () => {
    sayi1 += "9";
    result1.value = sayi1;
    console.log(sayi1);
})
plus.addEventListener("click", () => {
    operator += "+"
    console.log(result1.value);
})
