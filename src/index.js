import party from "party-js";

const expandMenuButton = document.querySelector("#expand-menu");
const collapseMenuButton = document.querySelector("#collapse-menu");
const asideContainer = document.querySelector("aside");
const dashboardContainer = document.querySelector("#dashboardContainer");
const articleContainer = document.querySelector("article");
const individualTasks = document.querySelectorAll(".individual-task");
const taskInputFields = document.querySelectorAll(".task-title, .task-due.visible");


expandMenuButton.addEventListener("click", expandMenu);
collapseMenuButton.addEventListener("click", collapseMenu);
taskInputFields.forEach((input) => {
  input.addEventListener('input', adjustInputsWidth);
});


individualTasks.forEach((taskLiElement) =>
  taskLiElement.addEventListener("click", taskClickHandler));

function adjustInputsWidth() {
  taskInputFields.forEach((input) => input.style.width = `${input.value.length+1}ch`);
}

function collapseMenu() {
  asideContainer.classList.remove("expand");
  dashboardContainer.removeEventListener("click", collapseMenu);
  articleContainer.classList.remove("darken");
}

function expandMenu() {
  asideContainer.classList.add("expand");
  dashboardContainer.addEventListener("click", collapseMenu);
  articleContainer.classList.add("darken");
  adjustInputsWidth()
}

function displayAvatar() {
  const img = document.querySelector("img.user-avatar");
  img.src = "pics/avatar.jpeg";
}

function taskClickHandler(event) {
  const ev = event.target;
  console.log(ev);
  // HANDLING TASK COMPLETE ACTION
  if (ev.className === "task-status-label" || ev.className === "task-status") {
    this.classList.add("animateCompletion");
    party.confetti(this, {
      count: party.variation.range(25, 50),
      speed: party.variation.range(350, 600),
    });
    setTimeout(function() {console.log('removing', this); this.remove(); }.bind(this) , 2000);
  }
  // HANDLING TASK BOX ONCLICK COLLAPSE
  else if (ev.className === 'collapse-task') {
    this.classList.remove("expanded-task");
    this.querySelector('.task-content').style.width = 'auto';
    this.querySelector('.task-title').style.width = 'auto';
    this.querySelector('.task-title').addEventListener('input', adjustInputsWidth)
    adjustInputsWidth();
  }


  // HANDLING TASK BOX ONCLICK EXPAND FOR EDIT
  else {
    this.classList.add("expanded-task");
    this.querySelector('.task-title').removeEventListener('input', adjustInputsWidth)
    this.querySelector('.task-content').style.width = '100%';
    this.querySelector('.task-title').style.width = '100%';
  }
}

displayAvatar();
adjustInputsWidth();
