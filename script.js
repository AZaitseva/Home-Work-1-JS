// console.log

// Задание 1
let nameUser=prompt("Как Вас зовут? ", " ");
alert('Привет, ' + nameUser + '!');
            


// Задание 2
const this_year = 2023
let date_of_birth = prompt("Введите свой год рождения! ", " ");
alert('Вам сейчас ' + (this_year - date_of_birth) +  ' лет!');



// Задание 3
let length = prompt("Введите длину стороны квадрата: ", " ");
alert('Периметр равен: ' + (length) * 4 );


// Задание 4
PI = 3.14
let r = prompt("Введите радиус окружности: ", " ");
alert('Площадь окружности равна: ' + (PI * r ** 2));


// Задание 5
let s = prompt("Введите рассотяние между городами в км.: ", " ");
let t = prompt("Введите время, за которое вы хотите добраться, в часах: ", " ");
alert('Средняя скорость, с которой Вам необходимо двигаться, чтобы успеть вовремя равна: ' + (s / t) + " км/час");


// Задание 6
const course = 0.9775
let dollar = prompt("Введите количество долларов: ", " ");
alert("Количество Евро по текущему курсу при обмене: " + (dollar * course) + " €");


// Задание 7
const MBinGB = 1024
const vfile = 820
let volumeFlash = prompt("Введите объём флэш-карты в Гб.: ", " ");
alert("На флэш-карту поместится: " + ((volumeFlash * MBinGB / vfile).toFixed(4)) + " файлов по 820 Мбайт");


// Задание 8
let sum = prompt("Введите, сколько денег у Вас в кошельке, руб.: ", " ");
let price = prompt("Введите стоимость одной шоколадки, руб.: ", " ");
let sell = sum / price;
let change = sum - (price * sell);
if (sell < 1) {
    alert("Сегодня вы не сможете купить шоколад :(. Приходите в другой раз");
  }
else {
    alert("Вы можете купить: " + ((sell).toFixed(0)) +  " шоколадок, и у Вас останется: " + ((change).toFixed(0)) + " руб.");
}


// Задание 9
let nmb = prompt("Введите трехзначное число: ");
let a = Number(nmb % 10);
let b = Number((nmb - a) / 10 % 10);
let c = Number((nmb - a - b * 10) / 100);
alert("Число наоборот будет: " + (a * 100 + b * 10 + c));


// Задание 10
let x = prompt("Введите число для проверки на четность: ");
x = Number(x);
alert((parseInt(x) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");






















