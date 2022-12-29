import party from "party-js";
import { Dashboard } from "./dashboard";
import moment from "moment";

export class App extends Dashboard {
  constructor() {
    super();
    // attach listeners
    expandMenuButton.addEventListener("click", this._expandMenu.bind(this));
    collapseMenuButton.addEventListener("click", this._collapseMenu.bind(this));
    taskInputFields.forEach((input) => {
      input.addEventListener("input", App._adjustInputsWidth);
    });
    individualTasks.forEach((taskLiElement) =>
      taskLiElement.addEventListener("click", this._taskClickHandler)
    );

    // adjust inputs initial width
    App._adjustInputsWidth();

    // display greeting and user avatar
    this._displayGreeting();
    this._displayAvatar();

    // render number of today and all tasks for nav
    this._displayNumberOfAllTasks();
    this._displayNumberOfTodayTasks();
  }

  static _adjustInputsWidth() {
    taskInputFields.forEach(
      (input) => (input.style.width = `${input.value.length + 1}ch`)
    );
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

  _taskClickHandler(event) {
    const ev = event.target;
    // HANDLING TASK COMPLETE ACTION
    if (
      ev.className === "task-status-label" ||
      ev.className === "task-status"
    ) {
      this.classList.add("animateCompletion");
      party.confetti(this, {
        count: party.variation.range(25, 50),
        speed: party.variation.range(350, 600),
      });
      setTimeout(
        function () {
          console.log("removing", this);
          this.remove();
        }.bind(this),
        2000
      );
    }
    // HANDLING TASK BOX ONCLICK COLLAPSE
    else if (ev.className === "collapse-task") {
      this.classList.remove("expanded-task");
      this.querySelector(".task-content").style.width = "auto";
      this.querySelector(".task-title").style.width = "auto";
      this.querySelector(".task-title").addEventListener(
        "input",
        App._adjustInputsWidth
      );
      App._adjustInputsWidth();
    }
    // HANDLING TASK BOX ONCLICK EXPAND FOR EDIT
    else {
      this.classList.add("expanded-task");
      this.querySelector(".task-title").removeEventListener(
        "input",
        App._adjustInputsWidth
      );
      this.querySelector(".task-content").style.width = "100%";
      this.querySelector(".task-title").style.width = "100%";
    }
  }

  _displayNumberOfAllTasks() {
    allTasksNumber.textContent = this.tasks.length;
  }

  _displayNumberOfTodayTasks() {
    todayTasksNumber.textContent = this.tasks.filter(task => 
      task.due === this.todayDate).length;
  }

}

// selecting DOM elements
const expandMenuButton = document.querySelector("#expand-menu");
const collapseMenuButton = document.querySelector("#collapse-menu");
const asideContainer = document.querySelector("aside");
const dashboardContainer = document.querySelector("#dashboardContainer");
const articleContainer = document.querySelector("article");
const individualTasks = document.querySelectorAll(".individual-task");
const taskInputFields = document.querySelectorAll(
  ".task-title, .task-due.visible"
);
const welcomeUserMessageSpan = document.querySelector(".welcome-user-message");
const avatarPlaceholder = document.querySelector("img.user-avatar");
const todayTasksNumber = document.querySelector('.today-tasks-number');
const allTasksNumber = document.querySelector('.all-tasks-number');