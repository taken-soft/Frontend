import MenuEntity from "./menuEntity";

export default class MenuValueEntity extends MenuEntity {
  currentValue = "";
  onValueChange;

  constructor(
    text,
    icon,
    onValueChange,
    currentValue,
  ) {
    super(text, icon);
    this.onValueChange = onValueChange;
    this.currentValue = currentValue;
  }
}
