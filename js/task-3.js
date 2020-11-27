const ADMIN_PASSWORD = 'jqueryismyjam';
const input = prompt('введите пароль');
let message;

if(input === null) {
    message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
