import Project from "./Project.js";
export default class ProjectList {
  #parent;
  #listOfProjects = [];

  constructor(parent) {
    this.#parent = parent;

    const projectList = this;
    const sideNav = this.#parent;
    const addProjDiv = document.getElementById("add-project-frame");

    const projectForm = document.forms["projectform"];
    projectForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const project = new Project(e.target[0].value);
      e.target[0].value = null;
      projectList.addProject(project.getProject());
      sideNav.populateProjectList();
      addProjDiv.classList.toggle("hidden");
    });
  }
  addProject(project) {
    this.#listOfProjects.push(project);
  }

  getList() {
    const listdiv = this.#parent.sideNavBody;
    if (this.#listOfProjects.length > 0) {
      for (let project of this.#listOfProjects) {
        listdiv.append(project);
      }
    } else {
      const noproj = document.createElement("div");
      noproj.textContent = "No Projects!";
      listdiv.append(noproj);
    }
    return listdiv;
  }
}
