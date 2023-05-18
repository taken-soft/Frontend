import MenuEntity from "./menuEntity";

export default class MenuValueEntity extends MenuEntity {
  currentValue = "";

  constructor(
    text,
    icon,
    currentValue,
  ) {
    super(text, icon);
    this.currentValue = currentValue;
  }
}
