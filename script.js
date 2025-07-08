let input_1 = document.getElementById("input1");
let input_2 = document.getElementById("input2");
let result = document.getElementById("output");

function add() {
    let a = Number(input_1.value) + Number(input_2.value);
    result.innerHTML = "The Addition of Two values is " + a;
}
function sub() {
    let a = Number(input_1.value) - Number(input_2.value);
    result.innerHTML = "The subtraction of Two values is " + a;
}

function mul() {
    let a = Number(input_1.value) * Number(input_2.value);
    result.innerHTML = "The Product of Two values is " + a;
}
function div() {
    let a = Number(input_1.value) / Number(input_2.value);
    result.innerHTML = "The Division of Two values is " + a;
}
