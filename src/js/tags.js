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
}