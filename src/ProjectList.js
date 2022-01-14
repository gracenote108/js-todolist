import Project from "./Project.js";
import snm from './SideNavManager';
import pvm from './ProjectViewManager';

export default class ProjectList {
  #parent;
  #listOfProjects = [];
  #projCount = 0;

  constructor(parent) {
    this.#parent = parent;
    snm.addProjList(this)

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
    if (this.#projCount < 10)
      this.#listOfProjects.push(project);
      this.#projCount++;
  }

  delProject(project){
    let idx = this.#listOfProjects.indexOf(project);
    if (idx > -1) {
      this.#listOfProjects.splice(idx, 1)
      this.#projCount--;
      snm.sideNav.populateProjectList();
      pvm.clearBody()
    }
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
