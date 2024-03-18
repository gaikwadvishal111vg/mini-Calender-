const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const todays = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

date.innerHTML= (todays.getDate<10?"0":"") + todays.getDate();
day.innerHTML=todays.weekDays[todays.getDay]();
month.innerHTML=todays.allMonths[todays.getMonth]();
year.innerHTML=todays.getFullYear();