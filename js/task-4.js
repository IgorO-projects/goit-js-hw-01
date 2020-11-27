let credits = 23580; 
const pricePerDroid = 3000; 
let totalPrice
let message

let quantity = prompt('Сколько дроидов Вам запоковать?');
if(quantity === null) {
    message = 'Отменено пользователем!';
} else { 
    totalPrice = quantity * pricePerDroid; 
    
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        credits = credits - totalPrice;
        message = `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`;
    }
} 
console.log(message)