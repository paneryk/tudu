import moment from "moment";

export const userData = {
  userid: 736902,
  username: "Eryk",
  avatarUrl: "pics/avatar.jpeg",
  tasks: createInitialTasks(),
  tags: createInitialTags(),
};

function createInitialTags() {
  const tags = ["critical", "regular", "personal", "work", "health"];
  return tags;
}

function createInitialTasks() {
  const initialTasks = [];
  // create 5 initial tasks
  const taskNames = [
    "Pick up Buba from Mat and Julie",
    "Sign up for a gym",
    "Make a money transfer to a landlord",
    "Call grandma for her birthday",
    "Sign up for snowboard equipment tests",
  ];
  const dueDates = [
    moment().format("YYYY MM DD"),
    moment().format("YYYY MM DD"),
    moment().format("YYYY MM DD"),
    moment().subtract(1, "days").format("YYYY MM DD"),
    moment().subtract(1, "days").format("YYYY MM DD"),
  ];
  const assignedTags = [
    ["critical", "personal"],
    ["regular", "health"],
    ["personal", "regular"],
    ["critical", "personal"],
    ["work", "health", "regular"],
  ];

  for (let i = 0; i < 5; i++) {
    initialTasks.push({
      name: taskNames[i],
      due: dueDates[i],
      tags: assignedTags[i],
    });
  }

  return initialTasks;
}
