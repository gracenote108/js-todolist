import SideNav from "./SideNav.js";
import TodoBody from "./TodoBody.js";
export default class MainBody {
  #parent;
  #root;
  #sidenav;
  #todobody;

  constructor(parent) {
    this.#parent = document.getElementById(parent);
    this.#root = document.createElement("div");
    this.#root.id = "body-container";
    this.#root.classList = "flex-row";
    this.#parent.append(this.#root);
    this.#sidenav = new SideNav(this.#root.id);
    this.#todobody = new TodoBody(this.#root.id);
  }

  get root() {
    this.#parent;
    return this.#root;
  }
}
