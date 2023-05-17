export default class MenuEntity {
  text;
  icon;
  onClick;
  onIconClick;
  type;

  constructor(
    text,
    icon,
    dashbordId,
    onIconClick,
    type,
  ) {
    this.text = text;
    this.icon = icon;
    this.onClick = () => console.log(dashbordId);
    this.onIconClick = onIconClick;
    this.type = type;
  }
}
