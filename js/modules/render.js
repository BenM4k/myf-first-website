import Display from './displays.js';

const display = new Display();

export function loop(container, list) {
    for (let i = 0; i < container.length; i+=1) {
        let content;

        if(list.className.includes('skills')){
            content = display.displaySkill(container[i]);
        }
        else if (list.className.includes('works')){
            content = display.displayWorks(container[i]);
        }
        else if(list.className.includes('exp-imgs')){
            content = display.displaySkillExp(container[i]);
        }
        else if(list.className.includes('exp-desc')){
            content = display.displaySkillDesc(container[i]);
        }
        else if(list.className.includes('work-types')){
            content = display.displayType(container[i]);
        }
        list.innerHTML += content;
    }
}

export function spa(list, current, list2, current2) {
    current.addEventListener('click', () => {
        display.displayPage(list, current);
        display.displaySection(list2, current2)
    })
}