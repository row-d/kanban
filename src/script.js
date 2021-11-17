let firstName = prompt("Enter your name");
let lastName = prompt("Enter your Last Name");
let yearOfBirth = prompt("Year of birth");
let Day = new Date();
const edad = Day.getFullYear() - yearOfBirth;

document.write(
  `<div class="bg-gray-200 h-screen">
    <p class="text-4xl p-4">👋 Hello 
    <span class="italic capitalize text-blue-500">${firstName} ${lastName}</span>
    , Today is <b>${Day}</b>
    </p> 
    <br> 
    <p class="text-center text-4xl">You are ${edad} years old 🌈</p>
  </div>`
);
