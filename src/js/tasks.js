import { Dashboard } from "./dashboard";
import moment from "moment";
import { Tags } from "./tags";
import party from "party-js";

// Customize moment.calendar formatting
moment.updateLocale("en", {
  calendar: {
    lastDay: "[yesterday]",
    sameDay: "[today]",
    lastWeek: "last dddd ",
    sameElse: "L",
  },
});


export class Tasks extends Dashboard {
  constructor() {
    super();
    this.taskClass = new Tags();
  }

  // Adjusting task title and due input fields width acc to the char number
  static _adjustInputsWidth() {
    const taskInputFields = document.querySelectorAll(
      ".task-title, .task-due.visible"
    );
    taskInputFields.forEach(
      (input) => (input.style.width = `${input.value.length}rem`)
    );
  }

  // Creating a list of overdue task and attaching it to overdueTaskList element
  displayOverdueTaskList() {
    const overdueTasks = this.tasks.filter((task) =>
      moment(task.due).isBefore(this.todayDate)
    );
    for (const task of overdueTasks) {
      const liElement = document.createElement("li");
      liElement.classList.add("individual-task");
      if (task.tags.includes("critical"))
        liElement.classList.add("critical-task");
      liElement.innerHTML = `
                <div class="task-content">
                    <button class="collapse-task" type="button"></button>
                    <label class="task-status-label">
                        <input type="checkbox" class="task-status">
                    </label>
                    <span class="task-title" contenteditable="true">${task.name}</span>
                    <span class="after-title-bullet">∙</span>
                    <span class="task-due hidden"></span>
                    <span class="task-due visible">${moment(
                      task.due
                    ).calendar(this.todayDate, "YYYY MM DD")}</span>
                </div>
                <div class="task-tags">
                    <span class="task-tags">
                    ${this.taskClass.renderTaskTagList(task.tags)}
                    </span>
                </div>`;
      overdueTaskList.append(liElement);
      liElement.addEventListener("click", this._taskClickHandler);
      /* liElement.addEventListener("input", Tasks._adjustInputsWidth); */
    }
    /* Tasks._adjustInputsWidth(); */
  }

  _taskClickHandler(event) {
    const ev = event.target;
    // Handling task complete event
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
    // Handling task container onclick collapse
    else if (ev.className === "collapse-task") {
      this.classList.remove("expanded-task");
      /* this.querySelector(".task-title").addEventListener(
        "input",
        Tasks._adjustInputsWidth
      );
      Tasks._adjustInputsWidth(); */
    }
    // Handling task container onclick expand for edit
    else {
      this.classList.add("expanded-task");
      /* Tasks._adjustInputsWidth(); */
    }
  }
}


// Select DOM elements
const overdueTaskList = document.querySelector("#overdueTaskList ul");
