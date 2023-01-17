import moment from "moment";

export class DashboardView {
  constructor() {
    // Attach listeners
    expandMenuButton.addEventListener("click", this._expandMenu.bind(this));
    collapseMenuButton.addEventListener("click", this._collapseMenu.bind(this));
  }

  displayGreeting(username) {
    const hour = moment().hour();
    let greetingMoment;
    if (hour > 16) greetingMoment = "Good evening";
    else if (hour > 11) greetingMoment = "Good afternoon";
    else greetingMoment = "Good morning";

    let greetingTemplate = `
                ${greetingMoment}, 
                <span class="user-name">${username}</span>
            `;
    welcomeUserMessageSpan.innerHTML = greetingTemplate;
  }

  displayAvatar(avatarUrl) {
    avatarPlaceholder.src = avatarUrl;
  }

  displayNumberOfAllTasks(totalTaskNumber) {
    allTasksNumber.textContent = totalTaskNumber;
  }

  displayNumberOfTodayTasks(todayTaskNumber) {
    todayTasksNumber.textContent = todayTaskNumber;
  }

  renderTagListForNav(tags) {
    for (const tag of tags) {
      const liElement = document.createElement("li");
      tagsListNav.append(liElement);
      liElement.textContent = tag;
      if (tag === "critical") liElement.classList.add("critical");
    }
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
const tagsListNav = document.querySelector(".nav.tags");
