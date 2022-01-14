import TodoItem from "./TodoItem";
class ProjectViewManager {
  #todoBody;
  #currentProject;
  #currentDisplay;

  addTodoReferences(todobody) {
    this.#todoBody = todobody;
  }

  addTodoItem() {
    const newItem = document.createElement("input");
    newItem.type = "textbox";
    newItem.classList = "new-item-input";
    this.#currentDisplay.append(newItem);
  }

  saveItem() {
    const children = this.#currentDisplay.children;

    for (let input of children) {
      if (input.children.length > 0 && input.children[1].checked) {
        this.#currentProject.removeTodoItem(input.id);
      }
    }

    for (let input of children) {
      if (input.tagName == "INPUT" && input.value) {
        this.#currentProject.addTodoItem(
          input.value,
          new TodoItem(input.value).element
        );
      }
    }

    this.#currentProject.renderList();
  }

  get todoBody() {
    return this.#todoBody;
  }

  get currentProject() {
    return this.#currentProject;
  }

  clearBody() {
    while (this.#todoBody.firstChild)
      this.#todoBody.removeChild(this.#todoBody.firstChild);
  }

  renderProjectList(header, antiScrollDiv, display, currentProject) {
    this.clearBody();
    this.#currentDisplay = display;
    this.#todoBody.append(header, antiScrollDiv);
    this.#currentProject = currentProject;
  }
}

const instance = new ProjectViewManager();
export default instance;
