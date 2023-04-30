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
    console.log(content)
    container.innerHTML += content;
}