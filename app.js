// MANS KODS
const btn = document.getElementById("btn");
const persons = document.getElementById("person");
const task = document.getElementById("task");

btn.addEventListener("click", () => {
  
    const randomItem = personAndTasks[Math.floor(Math.random() * personAndTasks.length)];

    const randomJob =
      randomItem.tasks[Math.floor(Math.random() * randomItem.tasks.length)];

    const newArray = randomItem.tasks;

    let index = newArray.indexOf(randomJob);

    if (index !== -1) {
      newArray.splice(index, 1);
    }

    if (randomJob === undefined) {
      alert(`${randomItem.person} have no tasks left!`);
    }

    persons.innerText = randomItem.person;
    task.innerText = randomJob;

});


const personAndTasks = [
  {
      person: "Edgars",
      tasks: ["task 1", "task 2", "task 3", "task 4"]
  },
  {
      person: "Kristaps",
      tasks: ["uzdevums 1", "uzdevums 2", "uzdevums 3", "uzdevums 4"]
  },
  {
      person: "Martins",
      tasks: ["darbs 1", "darbs 2", "darbs 3", "darbs 4"]
  }

]