const reviews = [
  {
    Id: 1,
    name: "susan smith",
    job: "web developer",
    img: "image/south-indian-girl.avif",
    text: "Web project manager: Oversees the development process of websites, coordinating with clients, designers, developers, and other stakeholders to ensure projects are completed on time and within budget.",
  },
  {
    id: 2,
    name: "mana johnson",
    job: "web designer",
    img:"image/360_F_345.jpg",
    text: "UI/UX designer: Focuses on creating a visually appealing and user-friendly interface for websites, ensuring a positive user experience.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "image/Female_new_profile.avif",
    text: "Front-end developer: Designs and implements the user interface of a website using HTML, CSS, and JavaScript.",
  },
    {
    id: 4,
    name: "petric jones",
    job: "Developer",
    img: "image/bohemian-man-2.avif",
    text: "Full-stack developer: Works on both the front-end and back-end of a website, handling all aspects of development from design to implementation."
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
// const author var document: Document yId("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson()
})

// show person based on items

function showPerson() {
    const item = reviews[currentItem];

    // img.src = reviews[person].img;
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person in object

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person in object


prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//show random person

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})