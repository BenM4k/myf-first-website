const skills = [
  {
    title: 'Frontend Developer',
    paragraph: '',
    img: 'assets/about01.png',
  },
  {
    title: 'Search Engine Optimization',
    paragraph: '',
    img: 'assets/about02.png',
  },
  {
    title: 'Dynamic websites',
    paragraph: '',
    img: 'assets/about03.png',
  },
  {
    title: 'Javascript',
    paragraph: '',
    img: 'assets/about04.png',
  },
];

function displaySkill(skills) {
  const { title, paragraph, img } = skills;
  const a = `
    <li>
        <img src="${img}" alt="${title}"/>
        <h2>${title}</h2>
        <p>${paragraph}</p>
    </li>
    `;
  return a;
}

const container = document.querySelector('.about-skills');
for (let i = 0; i < skills.length; i += 1) {
  const content = displaySkill(skills[i]);
  container.innerHTML += content;
}

const works = [
  {
    img: 'assets/about01.png',
    title: 'Personal Portfolio',
    type: 'Web App',
    desc: '',
  },
  {
    img: 'assets/about02.png',
    title: 'Capstone Project',
    type: 'Web App',
    desc: '',
  },
  {
    img: 'assets/about03.png',
    title: 'Awesome Books',
    type: 'SPA',
    desc: '',
  },
  {
    img: 'assets/about04.png',
    title: 'To-do List',
    type: 'SPA',
    desc: '',
  },
  {
    img: 'assets/about01.png',
    title: 'Coming soon',
    type: 'SPA',
    desc: '',
  },
];

function displayWorks(work) {
  const {
    img, title, desc, type,
  } = work;
  const workList = `
    <li>
        <img src="${img}"/>
        <span>${type}</span>
        <h2>${title}</h2>
        <p>${desc}</p>
    </li>
    `;
  return workList;
}

function displayType(type) {
  const typeList = `
    <li>${type}</>
    `;
  return typeList;
}
const typesList = ['All'];

for (let i = 0; i < works.length; i += 1) {
  const { type } = works[i];
  if (!typesList.includes(type)) {
    typesList.push(type);
  }
}

const workSection = document.querySelector('.works');
const types = document.querySelector('.work-types');

for (let i = 0; i < typesList.length; i += 1) {
  const typeList = displayType(typesList[i]);
  types.innerHTML += typeList;
}

for (let i = 0; i < works.length; i += 1) {
  const workList = displayWorks(works[i]);
  workSection.innerHTML += workList;
}

const skillsExps = [
  {
    img: 'assets/html.png',
    title: 'HTML 5',
  },
  {
    img: 'assets/sass.png',
    title: 'Sass',
  },
  {
    img: 'assets/typescript.png',
    title: 'Typescript',
  },
  {
    img: 'assets/python.png',
    title: 'Python',
  },
  {
    img: 'assets/redux.png',
    title: 'Redux',
  },
  {
    img: 'assets/node.png',
    title: 'Node JS',
  },
  {
    img: 'assets/vue.png',
    title: 'Vue',
  },
  {
    img: 'assets/figma.png',
    title: 'Figma',
  },
  {
    img: 'assets/css.png',
    title: 'CSS3',
  },
  {
    img: 'assets/react.png',
    title: 'React JS',
  },
  {
    img: 'assets/api.png',
    title: 'Api',
  },
  {
    img: 'assets/mu5.png',
    title: 'Material UI',
  },
];

const exps = [
  {
    date: '2021',
    title: 'Personal Portfolio',
    comp: 'Web App',
  },
  {
    date: '2023',
    title: 'Personal Portfolio',
    comp: 'Web App',
  },
  {
    date: '2022',
    title: 'Personal Portfolio',
    comp: 'Web App',
  },
];

function displaySkillExp(skill) {
  const { img, title } = skill;
  const skillList = `
    <li>
        <img src="${img}"/>
        <p>${title}</p>
    </>
    `;
  return skillList;
}

function displaySkillDesc(skill) {
  const { date, title, comp } = skill;
  const desc = `
    <li>
        <h3>${date}</h3>
        <ul>
            <li>${title}</li>
            <li>${comp}</li>
        <ul>
    </>
    `;
  return desc;
}

const skillExp = document.querySelector('.exp-imgs');
const desc = document.querySelector('.exp-desc');

for (let i = 0; i < skillsExps.length; i += 1) {
  const skillList = displaySkillExp(skillsExps[i]);
  skillExp.innerHTML += skillList;
}
for (let i = 0; i < exps.length; i += 1) {
  const skillDesc = displaySkillDesc(exps[i]);
  desc.innerHTML += skillDesc;
}

// spa
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navWork = document.querySelector('.nav-work');
const navSkills = document.querySelector('.nav-skills');
const navContact = document.querySelector('.nav-contact');

const sectionHome = document.querySelector('.headline');
const sectionAbout = document.querySelector('.about');
const sectionWork = document.querySelector('.work');
const sectionSkills = document.querySelector('.exp');
const sectionContact = document.querySelector('.contacts');

function displayPage(sections, current) {
  sections.forEach((section) => {
    section.classList.remove ('active');
  })
  current.classList.add('active');
}

function displaySection(sections, current) {
  sections.forEach((section) => {
    section.style.display = 'none';
  })
  current.style.display = 'block';
}



navHome.addEventListener('click', () => {
  displayPage([navHome, navAbout, navContact, navSkills, navWork], navHome);
  displaySection([sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork], sectionHome);
});
navAbout.addEventListener('click', () => {
  displayPage([navHome, navAbout, navContact, navSkills, navWork], navAbout);
  displaySection([sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork], sectionAbout);
});
navContact.addEventListener('click', () => {
  displayPage([navHome, navAbout, navContact, navSkills, navWork], navContact);
  displaySection([sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork], sectionContact);
});
navSkills.addEventListener('click', () => {
  displayPage([navHome, navAbout, navContact, navSkills, navWork], navSkills);
  displaySection([sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork], sectionSkills);
});
navWork.addEventListener('click', () => {
  displayPage([navHome, navAbout, navContact, navSkills, navWork], navWork);
  displaySection([sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork], sectionWork);
});