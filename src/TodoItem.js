export default class TodoItem {
  #root;

  constructor(item) {
    const div = document.createElement("div");
    div.id = item;
    div.classList = "flex-row jc-space-between";

    const itemName = document.createElement("div");
    itemName.textContent = item;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.append(itemName, checkbox);

    this.#root = div;
  }

  get element() {
    return this.#root;
  }
}
