import ProjectViewManager from "./ProjectViewManager.js";

export default class Project {
  #root;
  #mainBody;
  #todoList;

  constructor(projectName) {
    this.#todoList = new Map();
    const projectdiv = document.createElement("div");
    projectdiv.classList = "project-button";
    projectdiv.textContent = projectName;
    projectdiv.addEventListener("click", this.renderList.bind(this));

    this.#root = projectdiv;
    this.#mainBody = ProjectViewManager.todoBody;
  }

  addTodoItem(key, item) {
    this.#todoList.set(key, item);
  }

  removeTodoItem(key) {
    this.#todoList.delete(key);
  }

  renderList() {
    const todoHeader = document.createElement("div");
    todoHeader.id = "todo-header";
    todoHeader.classList = "flex-row jc-space-between";

    const todoLabel = document.createElement("div");
    todoLabel.textContent = "Todo";

    const projTitle = document.createElement("div");
    projTitle.textContent = this.#root.textContent;

    const todoFinishedLabel = document.createElement("div");
    todoFinishedLabel.textContent = "Completed";

    todoHeader.append(todoLabel, projTitle, todoFinishedLabel);

    const scrolldiv = document.createElement("div");
    scrolldiv.id = "anti-scroll";
    const listdiv = document.createElement("div");
    listdiv.id = "todo-body";
    listdiv.classList = "flex-column";
    for (let [key, value] of this.#todoList) {
      listdiv.append(value);
    }
    scrolldiv.append(listdiv);

    ProjectViewManager.renderProjectList(todoHeader, scrolldiv, listdiv, this);
  }

  getProject() {
    return this.#root;
  }
}
