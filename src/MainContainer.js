import MainBody from "./MainBody.js";
import NavBar from "./Navbar.js";
import ProjectFrame from "./ProjectFrame.js";

export default class MainContainer {
  #root;
  #navbar;
  #body;
  #projectFrame;

  constructor() {
    this.#root = document.getElementById("main");
    this.#root.id = "main-container";
    this.#root.classList = "flex-column";
    this.#projectFrame = new ProjectFrame(this.#root.id);
    this.#navbar = new NavBar(this.#root.id);
    this.#body = new MainBody(this.#root.id);
  }

  get root() {
    return this.#root;
  }
}
