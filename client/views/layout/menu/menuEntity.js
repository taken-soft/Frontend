export default class MenuEntity {
  text;
  icon;
  onClick;
  onIconClick;
  type;

  constructor(
    text,
    icon,
    onClick,
    onIconClick,
    type,
  ) {
    this.text = text;
    this.icon = icon;
    this.onClick = onClick;
    this.onIconClick = onIconClick;
    this.type = type;
  }
}
