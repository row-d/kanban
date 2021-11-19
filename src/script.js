let firstName = prompt("Enter your name");
let lastName = prompt("Enter your Last Name");
let yearOfBirth = prompt("Year of birth");

const DayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MonthName = [
  "January",
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
let Today = new Date();
const day = Today.getDay();
const month = Today.getMonth();
const year = Today.getFullYear();
let hour = Today.getHours();
let greeting;

const age = Today.getFullYear() - yearOfBirth; 
let ageMessage;
if (age < 0) {
  ageMessage = "You are not born yet 🤰";
}
else if (age < 18) {
  ageMessage = "You're still a baby 🧑‍🍼";
}
else if (age < 30) {
  ageMessage = "You're a teenager 🧑‍🎓";
}
else if (age < 50) {
  ageMessage = "You're a young adult 🧑‍💼";
}
else if (age < 70) {
  ageMessage = "You're a middle aged 👴";
}
else if (age < 100) {
  ageMessage = "You're an old adult 👵";
}
else {
  ageMessage = "You're a very old 🧙‍♂️";
}

if (hour >= 5 && hour < 12) {
  greeting = "🌻Good morning";
} else if (hour >= 12 && hour < 18) {
  greeting = "🌇Good afternoon";
} else if (hour >= 18 && hour < 24) {
  greeting = "🌙Good evening";
}

document.write(
  `<div class="bg-gray-200 h-screen">
    <p class="text-center text-4xl p-4">${greeting} 
    <span class="italic capitalize text-blue-500">${firstName} ${lastName}</span>
    , Today is <b>${DayName[day]} ${day} ${MonthName[month]} ${year} </b>
    </p> 
    <br> 
    <p class="text-center text-4xl">${ageMessage}</p>
  </div>`
);
