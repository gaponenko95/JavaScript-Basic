"use strict";
/*  */
const ToDoList = {
  tasks: [],

  addTask(title, id, priority, description) {
    this.tasks.push({ title, id, priority, description });
  },

  deleteTaskById(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTaskById(id, newTitle, newPriority, newDescription) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        if (newTitle) {
          task.title = newTitle;
        }
        if (newPriority) {
          task.priority = newPriority;
        }
        if (newDescription) {
          task.description = newDescription;
        }
      }
      return task;
    });
  },

  sortTasksByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      title: "test",
      priority: 1,
      description: "описание",
      order: 0,
    },
  ],
};

const addTaskFunc = ToDoList.addTask;
addTaskFunc.call(newTask, "тест 1", 2, 2, "тест описание 1");
addTaskFunc.call(newTask, "тест 2", 3, 5, "тест описание 2");
addTaskFunc.call(newTask, "тест 3", 4, 3, "тест описание 3");
console.log(newTask.tasks);

const deleteTaskByIdFunc = ToDoList.deleteTaskById;
deleteTaskByIdFunc.call(newTask, 3);
console.log(newTask.tasks);

const updateTaskByIdFunc = ToDoList.updateTaskById;
updateTaskByIdFunc.call(newTask, 4, "тест 5", 4, "тест описание 5");
console.log(newTask.tasks);

const sortTasksByPriorityFunc = ToDoList.sortTasksByPriority;
sortTasksByPriorityFunc.call(newTask);
console.log(newTask.tasks);

