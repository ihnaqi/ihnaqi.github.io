var typed = new Typed(".typing", {
   strings: [
      "",
      "Web Designer",
      "Web Developer",
      "Java Developer",
      "React.js Developer",
      "Node.js Developer",
      "Flutter Developer",
   ],
   typeSpeed: 78,
   BackSpeed: 60,
   loop: true,
});

const nav = document.querySelector(".nav"),
   navList = nav.querySelectorAll("li"),
   totalNavList = navList.length,
   allSection = document.querySelectorAll(".section"),
   totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
   const a = navList[i].querySelector("a");
   a.addEventListener("click", function () {
      removeBackSection();
      for (let j = 0; j < totalNavList; j++) {
         if (navList[j].querySelector("a").classList.contains("active")) {
            allSection[j].classList.add("back-section");
         }
         addBackSection(j);
      }
      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1100) {
         asideSectionTogglerBtn();
      }
   });
}

function addBackSection(index) {
   navList[index].querySelector("a").classList.remove("active");
}

function removeBackSection() {
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
   }
}

function showSection(element) {
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
   }
   const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
   for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if (
         target == navList[i].querySelector("a").getAttribute("href").split("#")[1]
      ) {
         navList[i].querySelector("a").classList.add("active");
      }
   }
}

const navToggleBtn = document.querySelector(".nav-toggler"),
   aside = document.querySelector(".aside");
   navToggleBtn.addEventListener("click", () => {
   asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
   aside.classList.toggle("open");
   navToggleBtn.classList.toggle("open");
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
   }
}

document.querySelector("#cv-btn").addEventListener('click', () => {
   var link = "https://drive.google.com/file/d/1OXUDLd4LKs7oEAS-RNTXLnFXv8MNAyJH/view?usp=drive_link"
   var a = document.createElement("a");
   a.href = link;
   document.body.appendChild(a)
   a.download = "Ishtiaq Naqi Resume.pdf";
   a.target = "_blank"
   a.click();
   document.body.removeChild(a);
})

const items = document.getElementsByClassName("portfolio-item");

for (let i = 0; i < items.length; i++) {
   switch (i) {
      case 0:
         items[0].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://ihnaqivans.netlify.app/'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
      case 1:
         items[1].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://github.com/ihnaqi/ihnaqi.github.io'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
      case 2:
         items[2].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://ihnaqitenzies.netlify.app/'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
      case 3:
         items[3].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://github.com/ihnaqi/Hope_Foundation_Management_System'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
      case 4:
         items[4].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://github.com/ihnaqi/'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
      case 5:
         items[5].addEventListener('click', () => {
            const a = document.createElement("a")
            a.href = 'https://github.com/ihnaqi/Problem-Solving-Competitive-Programming-'
            document.body.appendChild(a)
            a.click()
            document.removeChild(a)
         })
         break;
   }
}

// Contact Me Form
function contact() {
   const sender = document.getElementById("email").value;
   const subject = document.getElementById('subject').value;
   const message = `${document.getElementById('name').value}\n\n${document.getElementById('message').value}`
   console.log(`Sender: ${sender}\nSubject: ${subject}\nMessage: ${message}`)
   Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ih.spammable@gmail.com",
      Password: "AB5E6228F4BE85D69F3BDA5023F39C1C32F7",
      To: 'ihnaqi.dev@gmail.com',
      From: sender,
      Subject: subject,
      Body: message
   }).then(
      message => alert(message)
   );
}