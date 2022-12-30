import { Dashboard } from "./dashboard";

const tagsListNav = document.querySelector('.nav.tags');

export class Tags extends Dashboard {
    constructor() {
        super();
        this._renderTagListForNav();
    }

    _renderTagListForNav() {
        for (const tag of this.tags) {
            const liElement = document.createElement('li');
            tagsListNav.append(liElement);
            liElement.textContent = tag;
            if (tag === 'critical') liElement.classList.add('critical');
        }
    }

    renderTaskTagList(tagsArray) {
        let template = '';
        for (const tag of tagsArray) {
            template += `<span class="task-tag">${tag}</span>`
        }
        return template;
    }
}