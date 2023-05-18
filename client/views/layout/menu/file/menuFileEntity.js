import MenuValueEntity from "../menuValueEntity";

export default class MenuFileEntity extends MenuValueEntity {
  accept;
  constructor(
    text,
    icon,
    accept,
    currentValue,
  ) {
    super(text, icon, currentValue);
    this.accept = accept;
  }
}