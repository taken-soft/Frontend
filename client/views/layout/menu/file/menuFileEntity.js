import MenuValueEntity from "../menuValueEntity";

export default class MenuFileEntity extends MenuValueEntity {
  accept;
  constructor(text, icon, accept, onValueChange, currentValue) {
    super(text, icon, onValueChange, currentValue);
    this.accept = accept;
  }
}
