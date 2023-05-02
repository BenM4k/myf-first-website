const skills = [
    {
        title: "Frontend Developer",
        paragraph: "",
        img: "assets/about01.png",
    },
    {
        title: "Search Engine Optimization",
        paragraph: "",
        img: "assets/about02.png",
    },
    {
        title: "Dynamic websites",
        paragraph: "",
        img: "assets/about03.png",
    },
    {
        title: "Javascript",
        paragraph: "",
        img: "assets/about04.png",
    },
];

function displaySkill(skills) {
    const { title, paragraph, img } = skills;
    let a = `
    <li>
        <img src="${img}" alt="${title}"/>
        <h2>${title}</h2>
        <p>${paragraph}</p>
    </li>
    `;
    return a;
};

const container = document.querySelector('.about-skills');
for (let i = 0; i < skills.length; i+=1) {
    const content = displaySkill(skills[i]);
    container.innerHTML += content;
}

const works = [
    {
        img: "assets/about01.png",
        title: "Personal Portfolio",
        type: "Web App",
        desc: "",
    },
    {
        img: "assets/about02.png",
        title: "Capstone Project",
        type: "Web App",
        desc: "",
    },
    {
        img: "assets/about03.png",
        title: "Awesome Books",
        type: "SPA",
        desc: "",
    },
    {
        img: "assets/about04.png",
        title: "Coming soon",
        type: "SPA",
        desc: "",
    },
    {
        img: "assets/about01.png",
        title: "Coming soon",
        type: "SPA",
        desc: "",
    },
];

function displayWorks(work){
    const { img, title, desc, type } = work;
    let workList = `
    <li>
        <img src="${img}"/>
        <span>${type}</span>
        <h2>${title}</h2>
        <p>${desc}</p>
    </li>
    `;
    return workList;
}

function displayType(type){
    let typeList = `
    <li>${type}</>
    `;
    return typeList;
}
const typesList = [];

for (let i = 0; i < works.length; i++) {
    const { type } = works[i];
    if (!typesList.includes(type)) {
        typesList.push(type);
    }
}

const workSection = document.querySelector('.works');
const types = document.querySelector('.work-types');

for (let i = 0; i < typesList.length; i += 1) {
    let typeList = displayType(typesList[i])
    types.innerHTML += typeList;
}

for (let i = 0; i < works.length; i += 1) {
    let workList = displayWorks(works[i]);
    workSection.innerHTML += workList;
}
