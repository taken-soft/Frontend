import MenuEntity from "../menuEntity";

export default class MenuButtonEntity extends MenuEntity {
  onClick;
  constructor(text, icon, onClick) {
    super(text, icon);
    this.onClick = onClick;
  }
}
