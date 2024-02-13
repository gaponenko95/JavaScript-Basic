/* 
Scope и this
Написать объект ToDoList, который хранит в себе задачи { 'title':
'Помыть посуду, id: 1, priority: 1 } и имеет методы:
- Добавить задачу
- Удалить задачу по id
- Обновить имя или приоритет по Id
- Отсортировать задачи по приоритету
В git создать папку: 15-task-object
*/

const ToDoList = {
  tasks: [],

  addTask: function (title, id, priority) {
    this.tasks.push({ title, id, priority });
  },

  deleteTaskById: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTaskById: function (id, newTitle, newPriority) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        if (newTitle) {
          task.title = newTitle;
        }
        if (newPriority) {
          task.priority = newPriority;
        }
      }
      return task;
    });
  },

  sortTasksByPriority: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

ToDoList.addTask("Помыть посуду", 1, 1);
ToDoList.addTask("Выгулять собаку", 2, 3);
ToDoList.addTask("Сделать покупки", 3, 2);
ToDoList.updateTaskById(2, "Почистить зубы", 3);
ToDoList.deleteTaskById(1);
ToDoList.sortTasksByPriority();

console.log(ToDoList.tasks);
