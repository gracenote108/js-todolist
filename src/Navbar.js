export default class NavBar {
  #parent;
  #root = document.createElement("div");
  #sideNavToggle = document.createElement("div");
  #title = document.createElement("div");

  constructor(parent) {
    this.#parent = document.getElementById(parent);
    this.#root.id = "nav-container";
    this.#root.classList =
      "flex-row ai-center jc-space-around background-color";
    this.createSidenavToggle();
    this.createTitle("Karma");
    this.#root.append(
      this.#sideNavToggle,
      this.#title,
      document.createElement("div")
    );

    this.#parent.append(this.#root);
  }

  createTitle(title) {
    this.#title.id = "nav-title";
    this.#title.textContent = title;
  }

  createSidenavToggle() {
    this.#sideNavToggle = document.createElement("div");
    this.#sideNavToggle.id = "sidenav-toggle";
    const closed = document.createElement("div");
    const open = document.createElement("div");
    closed.id = "nav-closed";
    closed.classList = "flex-column jc-center ai-center";
    open.id = "nav-open";
    open.classList = "ai-center";

    for (let i = 0; i < 3; i++) {
      closed.append(document.createElement("span"));
    }

    for (let i = 0; i < 2; i++) {
      open.append(document.createElement("span"));
    }

    this.#sideNavToggle.append(closed);
    this.#sideNavToggle.append(open);
  }
}
