let firstName = prompt("Enter your name") || "Anonymous";
let lastName = prompt("Enter your Last Name") || "Person";
let yearOfBirth = prompt("Year of birth") || NaN;

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

// get the current date and age

const Today = new Date();
const day = Today.getDay();
const month = Today.getMonth();
const year = Today.getFullYear();
const hour = Today.getHours();
const age = Today.getFullYear() - yearOfBirth;
let ageMessage;

// determine message based on age
if (isNaN(age)) {
  ageMessage = "I don't know your age 🥲";
} else if (age < 0) {
  ageMessage = "You are not born yet 🤰";
} else if (age < 18) {
  ageMessage = "You're still a baby 🧑‍🍼";
} else if (age < 30) {
  ageMessage = "You're a teenager 🧑‍🎓";
} else if (age < 50) {
  ageMessage = "You're a young adult 🧑‍💼";
} else if (age < 70) {
  ageMessage = "You're a middle aged 👴";
} else if (age < 100) {
  ageMessage = "You're an old adult 👵";
} else {
  ageMessage = "You're a very old 🧙‍♂️";
}

// determine message based on time of day

let greeting = "🌙Good evening";
if (hour >= 5 && hour < 12) {
  greeting = "🌻Good morning";
} else if (hour >= 12 && hour < 18) {
  greeting = "🌇Good afternoon";
}

//  Rendering
const body = document.body;

// Image Gallery
const imageGallery = document.createElement("div");
imageGallery.classList.add(
  "flex",
  "flex-wrap",
  "gap-2",
  "p-3"
);

// random id generator for image url
const randomRange = Math.floor(Math.random() * 100);
const maxRange = randomRange + 30;

for (let i = randomRange; i < maxRange; i++) {
  fetch(`https://picsum.photos/id/${i}/info`)
    .then((res) => res.json())
    .then((imgInfo) => {
      try {
        const anchor = document.createElement("a");
        const img = document.createElement("img");
        // attributes
        img.src = imgInfo.download_url;
        img.alt = imgInfo.author;
        img.loading = "lazy";
        anchor.href = imgInfo.url;
        anchor.target = "_blank";

        // Styling
        img.classList.add(
          "block",
          "w-full",
          "max-h-full",
          "max-w-full",
          "object-cover",
          "align-bottom",
          "rounded-lg",
          "border-4",
          "border-gray-300",
          "hover:border-red-500"
        );
        anchor.classList.add(
          "flex-grow",
          "sm:h-auto",
          "md:h-64",
          "lg:h-96",
          "shadow-xl",
          "rounded-lg",
          "overflow-hidden",
          "hover:shadow-2xl"
        );
        // appending
        anchor.appendChild(img);
        imageGallery.appendChild(anchor);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log(err));
}

body.innerHTML = `<div>
     <p class="text-center text-4xl p-4">${greeting}
     <span class="italic capitalize text-blue-500">${firstName} ${lastName}</span>
     , Today is <b>${DayName[day]} ${day} ${MonthName[month]} ${year} </b>
     </p>
     <br>
     <p class="text-center text-4xl">${ageMessage}</p>
  </div>`;
body.appendChild(imageGallery);
