import party from "party-js";

const expandMenuButton = document.querySelector("#expand-menu");
const collapseMenuButton = document.querySelector("#collapse-menu");
const asideContainer = document.querySelector("aside");
const dashboardContainer = document.querySelector("#dashboardContainer");
const articleContainer = document.querySelector("article");
const individualTasks = document.querySelectorAll(".individual-task");

expandMenuButton.addEventListener("click", expandMenu);
individualTasks.forEach((taskLiElement) =>
  taskLiElement.addEventListener("click", function (clickedElement) {
    taskClickHandler(this, clickedElement.target);
  })
);
collapseMenuButton.addEventListener("click", collapseMenu);

function collapseMenu() {
  asideContainer.classList.remove("expand");
  dashboardContainer.removeEventListener("click", collapseMenu);
  articleContainer.classList.remove("darken");
}

function expandMenu() {
  asideContainer.classList.add("expand");
  dashboardContainer.addEventListener("click", collapseMenu);
  articleContainer.classList.add("darken");
}

function displayAvatar() {
  const img = document.querySelector("img.user-avatar");
  img.src = "pics/avatar.jpeg";
}

function taskClickHandler(taskLiElement, target) {
  if (target.tagName !== "INPUT" && target.tagName !== "LABEL") {
    taskLiElement.classList.add("expanded-task");
  }
  if (target.tagName === "INPUT" || target.tagName === "LABEL") {
    taskLiElement.classList.add("animateCompletion");
    party.confetti(target, {
      count: party.variation.range(25, 50),
      speed: party.variation.range(350, 600),
    });
    setTimeout(function () {
      taskLiElement.remove();
    }, 2000);
  }
}

displayAvatar();
