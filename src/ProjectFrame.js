export default class ProjectFrame {
  #parent;
  constructor(parent) {
    this.#parent = document.getElementById(parent);
    this.createFrame();
  }

  createFrame() {
    const addProjDiv = document.createElement("div");
    addProjDiv.id = "add-project-frame";
    addProjDiv.classList = "flex-row jc-center background-color hidden";

    const projectForm = document.createElement("form");
    projectForm.id = "add-project-form";
    projectForm.name = "projectform";
    projectForm.classList = "flex-column jc-space-evenly";
    addProjDiv.append(projectForm);

    const projectNameInput = document.createElement("input");
    projectNameInput.id = "form-project-name";
    projectNameInput.type = "text";
    projectNameInput.name = "projectName";
    projectNameInput.maxLength = 20;
    projectNameInput.required = true;
    projectNameInput.placeholder = "Project Name";

    const submitInput = document.createElement("input");
    submitInput.id = "submit-button";
    submitInput.classList = "button";
    submitInput.type = "submit";
    submitInput.value = "Submit";
    projectForm.append(projectNameInput);
    projectForm.append(submitInput);

    this.#parent.append(addProjDiv);
  }
}
