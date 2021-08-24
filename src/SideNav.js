import ProjectList from "./ProjectList";

export default class SideNav {
  #parent;
  #projectListBody;
  #projectList;
  #root;

  constructor(parent) {
    this.#parent = document.getElementById(parent);
    this.createSideNav();
    this.#projectList = new ProjectList(this);
    this.populateProjectList();
  }

  get root() {
    return this.#root;
  }

  get sideNavBody() {
    return this.#projectListBody;
  }

  populateProjectList() {
    while (this.#projectListBody.firstChild)
      this.#projectListBody.removeChild(this.#projectListBody.firstChild);

    if (this.#projectList.getList().length > 0) {
      this.#projectListBody.append(this.#projectList.getList());
    }
  }

  createSideNav() {
    const sideNavToggle = document.getElementById("sidenav-toggle");
    const sideDiv = document.createElement("div");
    sideDiv.id = "sidenav-container";
    sideDiv.classList = "flex-column ai-center background-color closed";
    sideNavToggle.addEventListener("click", function () {
      this.classList.toggle("open");
      sideDiv.classList.toggle("closed");
    });

    const sideNavTitle = this.createSideNavTitle();
    const projectListBody = document.createElement("div");
    projectListBody.id = "project-list";
    sideDiv.append(sideNavTitle);
    sideDiv.append(projectListBody);

    this.#parent.append(sideDiv);
    this.#root = sideDiv;
    this.#projectListBody = projectListBody;
  }

  createSideNavTitle() {
    const projectFrame = document.getElementById("add-project-frame");
    const sideNavTitleContainer = document.createElement("div");
    sideNavTitleContainer.id = "sidenav-title-container";
    sideNavTitleContainer.classList = "flex-row jc-space-evenly ai-center";

    const sideNavTitle = document.createElement("div");
    sideNavTitle.textContent = "Projects";
    sideNavTitleContainer.append(sideNavTitle);

    const projectNameInput = document.getElementById("form-project-name");
    const sideNavAddButton = document.createElement("div");
    sideNavAddButton.id = "sidenav-add";
    sideNavAddButton.textContent = "+";
    sideNavAddButton.addEventListener("click", function () {
      projectFrame.classList.toggle("hidden");
      projectNameInput.focus();
    });
    sideNavTitleContainer.append(sideNavAddButton);

    return sideNavTitleContainer;
  }
}
