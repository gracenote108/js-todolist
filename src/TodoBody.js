import ProjectViewManager from "./ProjectViewManager.js";

export default class TodoBody {
  #root;

  constructor(parent) {
    const main = document.getElementById(parent);
    const todoBodyDiv = document.createElement("div");
    todoBodyDiv.id = "todobody-container";
    todoBodyDiv.classList = "flex-column";

    const todoBodyDisplay = document.createElement("div");
    todoBodyDisplay.id = "todobody-display";
    todoBodyDiv.append(todoBodyDisplay);

    const todoBodyControls = document.createElement("div");
    todoBodyControls.id = "todobody-controls";
    todoBodyControls.classList = "flex-row jc-flex-end ai-center";
    todoBodyDiv.append(todoBodyControls);

    const addItemButton = document.createElement("div");
    addItemButton.id = "todo-add-item";
    addItemButton.classList = "background-color button";
    addItemButton.textContent = "Add Item";
    addItemButton.addEventListener(
      "click",
      ProjectViewManager.addTodoItem.bind(ProjectViewManager)
    );
    todoBodyControls.append(addItemButton);

    const saveButton = document.createElement("div");
    saveButton.id = "todo-save";
    saveButton.classList = "background-color button";
    saveButton.textContent = "Save";
    saveButton.addEventListener(
      "click",
      ProjectViewManager.saveItem.bind(ProjectViewManager)
    );
    todoBodyControls.append(saveButton);

    main.append(todoBodyDiv);
    this.#root = todoBodyDiv;

    ProjectViewManager.addTodoReferences(todoBodyDisplay);
  }
}
