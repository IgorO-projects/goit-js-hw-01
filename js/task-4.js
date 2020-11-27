let balance = 23580;
const pricePerDroid = 3000;
let message;

let quantity = prompt('Сколько дроидов Вам запоковать?');

if(quantity === null) {
    message = 'Отменено пользователем!';
} else { 

    let totalPrice = quantity * pricePerDroid;

    if(totalPrice > balance) {
        message = 'Недостаточно средств на счету!';
    } else {
        balance = balance - totalPrice;
        message = `Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`;
    }
}
console.log(message);