import party from "party-js";
import { Dashboard } from "./dashboard";
import moment from "moment";

export class App extends Dashboard {
  constructor() {
    super();
    // Attach listeners
    expandMenuButton.addEventListener("click", this._expandMenu.bind(this));
    collapseMenuButton.addEventListener("click", this._collapseMenu.bind(this));

    // Display greeting and user avatar
    this._displayGreeting();
    this._displayAvatar();

    // Render today and all tasks number for nav
    this._displayNumberOfAllTasks();
    this._displayNumberOfTodayTasks();
  }

  _displayGreeting() {
    const hour = moment().hour();
    let greetingMoment;
    if (hour > 16) {
      greetingMoment = "Good evening";
    } else if (hour > 11) {
      greetingMoment = "Good afternoon";
    } else {
      greetingMoment = "Good morning";
    }
    let greetingTemplate = `
            ${greetingMoment}, 
            <span class="user-name">${this.username}</span>
        `;
    welcomeUserMessageSpan.innerHTML = greetingTemplate;
  }

  _displayAvatar() {
    avatarPlaceholder.src = this.avatarUrl;
  }

  _expandMenu() {
    asideContainer.classList.add("expand");
    dashboardContainer.addEventListener("click", this._collapseMenu);
    articleContainer.classList.add("darken");
  }

  _collapseMenu() {
    asideContainer.classList.remove("expand");
    dashboardContainer.removeEventListener("click", this._collapseMenu);
    articleContainer.classList.remove("darken");
  }

  _displayNumberOfAllTasks() {
    allTasksNumber.textContent = this.tasks.length;
  }

  _displayNumberOfTodayTasks() {
    todayTasksNumber.textContent = this.tasks.filter(
      (task) => task.due === this.todayDate
    ).length;
  }
}

// Selecting DOM elements
const expandMenuButton = document.querySelector("#expand-menu");
const collapseMenuButton = document.querySelector("#collapse-menu");
const asideContainer = document.querySelector("aside");
const dashboardContainer = document.querySelector("#dashboardContainer");
const articleContainer = document.querySelector("article");
const welcomeUserMessageSpan = document.querySelector(".welcome-user-message");
const avatarPlaceholder = document.querySelector("img.user-avatar");
const todayTasksNumber = document.querySelector(".today-tasks-number");
const allTasksNumber = document.querySelector(".all-tasks-number");
