let input;
let total = 0;

while(input !== null) {
    input = prompt('видите чифру');  
    if(input === null) {
        alert(`Общая сумма чисел равна ${total}`)
    } else {
        total = total + Number(input);  
    }
}