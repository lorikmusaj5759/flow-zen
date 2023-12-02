/* 
Filename: ComplexCode.js
Content: This code is a complex implementation of a task management system using JavaScript.

The code below is a task management system that allows users to create, read, update, and delete tasks. It includes features like priority levels, due dates, and status updates.
*/

// Task class
class Task {
  constructor(title, description, priority, dueDate, status) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, priority, dueDate, status) {
    const newTask = new Task(title, description, priority, dueDate, status);
    this.tasks.push(newTask);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  updateTask(index, updatedTask) {
    this.tasks[index] = updatedTask;
  }

  filterTasksByStatus(status) {
    return this.tasks.filter(task => task.status === status);
  }

  filterTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  filterTasksByDueDate(dueDate) {
    return this.tasks.filter(task => task.dueDate === dueDate);
  }

  getTasksCount() {
    return this.tasks.length;
  }
}

// Usage Example
const taskManager = new TaskManager();
taskManager.addTask("Complete Project", "Finish project deliverables", "High", "2022-06-30", "In Progress");
taskManager.addTask("Submit Report", "Submit final project report", "Medium", "2022-07-05", "Pending");
taskManager.addTask("Prepare Presentation", "Prepare slides for project presentation", "Low", "2022-07-10", "Pending");

console.log("Total number of tasks:", taskManager.getTasksCount());
console.log("Tasks with 'Pending' status:", taskManager.filterTasksByStatus("Pending"));
console.log("Tasks with 'High' priority:", taskManager.filterTasksByPriority("High"));
console.log("Tasks due on '2022-07-10':", taskManager.filterTasksByDueDate("2022-07-10"));

taskManager.updateTask(1, new Task("Submit Report", "Submit revised project report", "High", "2022-07-08", "In Progress"));
console.log("Updated task at index 1:", taskManager.tasks[1]);

taskManager.deleteTask(0);
console.log("Remaining tasks:", taskManager.tasks);

// ... More code follows (extra features, event handling, validation, etc.)

// Please note, the above code is just a simple demonstration of a task management system and isn't a complete implementation.