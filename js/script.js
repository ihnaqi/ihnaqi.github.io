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
   var link = "https://drive.google.com/file/d/1M0y6bS1Mk8-3ZCCpk63tg2H8RdhZgX_B/view?usp=drive_link"
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
   const message = `${document.getElementById('name').value}\nSender: ${sender}\n\n${document.getElementById('message').value}`
   Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ih.spammable@gmail.com",
      Password: "AB5E6228F4BE85D69F3BDA5023F39C1C32F7",
      To: 'ihnaqi.dev@gmail.com',
      From: "ih.spammable@gmail.com",
      Subject: subject,
      Body: message
   }).then(
      message => alert(message)
   );
}

const socialLinks = document.getElementById("social-links").children

for(let i = 0; i < socialLinks.length; i ++) {
   switch(i){
      case 0:
         clickMe(socialLinks[i], "https://www.linkedin.com/in/ishtiaqnaqi")
         break;
      case 1:
         clickMe(socialLinks[i], "https://www.github.com/ihnaqi")
         break;
      case 2:
         clickMe(socialLinks[i], "https://leetcode.com/ihnaqi/")
         break;
      case 3:
         clickMe(socialLinks[i], "https://codeforces.com/profile/ihnaqi")
         break;
      case 4:
         clickMe(socialLinks[i], "https://open.kattis.com/users/ihnaqi")
         break;
      case 5:
         clickMe(socialLinks[i], "https://www.twitter.com/ih_naqi")
         break;
      case 6:
         clickMe(socialLinks[i], "https://www.instagram.com/in.naqi")
         break;
      case 7:
         clickMe(socialLinks[i], "https://www.facebook.com/ishtiaqhussain.naqi")
         break;
   }
}

function clickMe(item, link) {
   item.addEventListener('click', () => {
      const a = document.createElement("a")
      a.href = link
      document.body.appendChild(a)
      a.click()
      document.removeChild(a)
   })
}

document.getElementById("phone").addEventListener('click', () => {
   const a = document.createElement("a")
   document.body.appendChild(a)
   a.href = `tel:+923045114480`
   a.click()
   document.body.removeChild(a)
})
document.getElementById("email_").addEventListener('click', () => {
   const a = document.createElement("a")
   document.body.appendChild(a)
   a.href = `mailto:ihnaqi.dev@gmail.com`
   a.click()
   document.body.removeChild(a)
})

document.getElementById("website").addEventListener('click', () => {
   const a = document.createElement("a")
   document.body.appendChild(a)
   a.href = `https://ihnaqi.github.io`
   a.click()
   document.body.removeChild(a)
})