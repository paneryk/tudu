import moment from "moment";
import party from "party-js";

// Customize moment.calendar formatting
moment.updateLocale("en", {
  calendar: {
    lastDay: "[yesterday]",
    sameDay: "[today]",
    lastWeek: "last dddd",
    sameElse: "",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  },
});

export class TasksView {
  displayTaskList(tasks, todayDate, DOMelement, clickHandler) {
    for (const task of tasks) {
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
                        <span class="task-title" contenteditable="true">${
                          task.name
                        }</span>
                        <span class="after-title-bullet">∙</span>
                        <span class="task-due hidden"></span>
                        <span class="task-due visible">${moment(
                          task.due
                        ).calendar(todayDate, "YYYY MM DD")}</span>
                    </div>
                    <div class="task-tags">
                        <span class="task-tags">
                        ${this._renderTaskTagList(task.tags)}
                        </span>
                    </div>`;
      DOMelement.append(liElement);
      liElement.addEventListener("click", clickHandler);
    }
  }

  completeTask(task) {
    task.classList.add("animateCompletion");
    party.confetti(task, {
      count: party.variation.range(25, 50),
      speed: party.variation.range(350, 600),
    });
    setTimeout(
      function () {
        task.remove();
      }.bind(this),
      2000
    );
  }

  collapseTask(task) {
    task.classList.remove("expanded-task");
  }

  expandTask(task) {
    task.classList.add("expanded-task");
  }

  _renderTaskTagList(tagsArray) {
    let template = "";
    for (const tag of tagsArray) {
      template += `<span class="task-tag">${tag}</span>`;
    }
    return template;
  }
}
