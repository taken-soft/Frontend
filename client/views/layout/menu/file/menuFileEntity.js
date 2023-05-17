import MenuEntity from "../menuEntity";

export default class MenuFileEntity extends MenuEntity {
  accept;
  constructor(
    text,
    icon,
    accept,
  ) {
    super(text, icon);
    this.accept = accept;
  }
}