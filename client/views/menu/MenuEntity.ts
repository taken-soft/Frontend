import { MenuEntityType } from "./MenuEntityType";

export default class MenuEntity {
  public text: string;
  public icon: string;
  public onClick: Function;
  public onIconClick: Function;
  public type: MenuEntityType;

  constructor(
    text: string,
    icon: string,
    onClick: Function,
    onIconClick: Function,
    type: MenuEntityType,
  ) {
    this.text = text;
    this.icon = icon;
    this.onClick = onClick;
    this.onIconClick = onIconClick;
    this.type = type;
  }
}
