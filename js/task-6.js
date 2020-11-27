// let input;
// let total = 0;

// while(input !== null) {
//     input = prompt('видите чифру');  
//     if(input === null) {
//         alert(`Общая сумма чисел равна ${total}`)
//     } else {
//         total = total + Number(input);  
//     }
// }

// ******************************************************************************************************************

let input;
let total = 0; 

while(input !== null) {
    input = prompt('ведете число');

    // Мы спрашиваем у input, который переведен уже в число, 
    // является ли он не числом? и получаем ответ true. 
    // При этом условие говорит, если input не число тогда выполнил alert, 
    // а если input число, сделай что написано в "иначе" else.
    if(isNaN(Number(input)))  {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        if(input === null){
            alert(`Общая сумма чисел равна ${total}`);
        } else {
            total += Number(input);
        }
    } 
}

// ******************************************************************************************************************

// let total = 0;

// do {

//     let input = prompt('видете число');
//     console.log('тип значения из input:',typeof input);
//     console.log('является не числом значение из input:', isNaN(Number(input)));

//     if(input === null) {
//         break;
//     }

//     input = Number(input);

//     const notANumber = Number.isNaN(input);

//     if(notANumber){
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }

//     total = total + input;
//     console.log(total);

// } while (true)
// total = alert(`Общая сумма чисел равна ${total}`);