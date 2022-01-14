import ProjectViewManager from "./ProjectViewManager.js";
import snm from "./SideNavManager";

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
    todoBodyControls.classList = "flex-row jc-space-between ai-center";
    todoBodyDiv.append(todoBodyControls);

    const delProjButton = document.createElement('div')
    delProjButton.id = 'del-proj-btn';
    delProjButton.classList = 'background-color button';
    delProjButton.textContent = 'Delete Project';
    delProjButton.addEventListener('click', () => {
      snm.projList.delProject(ProjectViewManager.currentProject.getProject())
    })
    todoBodyControls.append(delProjButton)

    const addItmSaveCont = document.createElement('div')
    addItmSaveCont.id = 'todo-addsave-cont';
    addItmSaveCont.classList = 'flex-row';
    todoBodyControls.append((addItmSaveCont))

    const addItemButton = document.createElement("div");
    addItemButton.id = "todo-add-item";
    addItemButton.classList = "background-color button";
    addItemButton.textContent = "Add Item";
    addItemButton.addEventListener(
      "click",
      ProjectViewManager.addTodoItem.bind(ProjectViewManager)
    );
    addItmSaveCont.append(addItemButton);

    const saveButton = document.createElement("div");
    saveButton.id = "todo-save";
    saveButton.classList = "background-color button";
    saveButton.textContent = "Save";
    saveButton.addEventListener(
      "click",
      ProjectViewManager.saveItem.bind(ProjectViewManager)
    );
    addItmSaveCont.append(saveButton);

    main.append(todoBodyDiv);
    this.#root = todoBodyDiv;

    ProjectViewManager.addTodoReferences(todoBodyDisplay);
  }
}
