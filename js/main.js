import { loop, spa } from "./modules/render.js";
import { storages } from "./modules/storages.js";

const container = document.querySelector('.about-skills');
const workSection = document.querySelector('.works');
const types = document.querySelector('.work-types');
const skillExp = document.querySelector('.exp-imgs');
const desc = document.querySelector('.exp-desc');

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

const list1 = [navHome, navAbout, navContact, navSkills, navWork];
const list2 = [sectionHome, sectionAbout, sectionContact, sectionSkills, sectionWork];

window.onload = () => {
  let { skills, works, skillsExps, exps, typesList } = storages;

  for (let i = 0; i < works.length; i += 1) {
    const { type } = works[i];
    if (!typesList.includes(type)) {
      typesList.push(type);
    }
  }
  
  loop(skills, container);
  loop(works, workSection);
  loop(skillsExps, skillExp );
  loop(exps, desc)
  loop(typesList, types)
  
  for (let i = 0; i < list1.length; i++) {
    spa(list1, list1[i], list2, list2[i]);
  }
}
