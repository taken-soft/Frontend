import MenuEntity from "./menuEntity";

export default class MenuValueEntity extends MenuEntity {
  currentValue = "";
  onValueChange = (event) => {
    this.currentValue = event.target.value;
  };

  constructor(
    text,
    icon,
    onValueChange,
    currentValue,
  ) {
    super(text, icon);
    if(onValueChange) this.onValueChange = onValueChange;
    if(currentValue) this.currentValue = currentValue;
  }
}
