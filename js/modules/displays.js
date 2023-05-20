export default class Display {
    displaySkill(skills) {
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

    displayWorks(work) {
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

    displayType(type) {
        const typeList = `
          <li>${type}</>
          `;
        return typeList;
    }

    displaySkillExp(skill) {
        const { img, title } = skill;
        const skillList = `
          <li>
              <img src="${img}"/>
              <p>${title}</p>
          </>
          `;
        return skillList;
    }

    displaySkillDesc(skill) {
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

    displayPage(sections, current) {
        sections.forEach((section) => {
          section.classList.remove ('active');
        })
        current.classList.add('active');
    }

    displaySection(sections, current) {
        sections.forEach((section) => {
          section.style.display = 'none';
        })
        current.style.display = 'block';
    }
}