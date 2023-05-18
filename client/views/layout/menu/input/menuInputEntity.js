import MenuValueEntity from "../menuValueEntity";

export default class MenuInputEntity extends MenuValueEntity {
  placeholder;
  constructor(text, icon, placeholder, onValueChange, currentValue) {
    super(text, icon, onValueChange, currentValue);
    this.placeholder = placeholder;
  }
}
