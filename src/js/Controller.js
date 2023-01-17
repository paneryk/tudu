import { Dashboard } from "./Dashboard";
import { DashboardView } from "./DashboardView";
import { TasksView } from "./TasksView";

export class Controller {
  constructor() {
    this.tasksView = new TasksView();
    this.dashboardView = new DashboardView();
    this.dashboard = new Dashboard();

    this.tasksView.displayTaskList(
      this.dashboard.tasks,
      this.dashboard.todayDate,
      overdueTaskList,
      this.taskClickHandler.bind(this)
    );

    this.dashboardView.displayGreeting(this.dashboard.username);
    this.dashboardView.displayAvatar(this.dashboard.avatarUrl);
    this.dashboardView.displayNumberOfAllTasks(this.dashboard.tasks.length);
    this.dashboardView.displayNumberOfTodayTasks(
      this.dashboard.tasks.filter((task) => task.due === this.todayDate).length
    );
  }

  taskClickHandler(event) {
    const target = event.target;
    const task = target.closest("li.individual-task");
    // Handling task complete event
    if (
      target.className === "task-status-label" ||
      target.className === "task-status"
    ) {
      this.tasksView.completeTask(task);
    }
    // Handling task container onclick collapse
    else if (target.className === "collapse-task") {
      this.tasksView.collapseTask(task);
    }
    // Handling task container onclick expand for edit
    else {
      this.tasksView.expandTask(task);
    }
  }
}

const overdueTaskList = document.querySelector("#overdueTaskList ul");
