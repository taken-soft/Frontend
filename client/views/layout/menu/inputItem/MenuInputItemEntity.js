import MenuValueEntity from "../menuValueEntity";

export default class MenuInputItemEntity extends MenuValueEntity {
  isClicked = false;
  changeIsClicked() {
    this.isClicked = !this.isClicked;
  }
  placeholder;
  onClick;
  onIconClick;
  constructor(
    text,
    icon,
    placeholder,
    currentValue,
    onValueChange,
    onClick,
    onIconClick
  ) {
    super(text, icon, onValueChange, currentValue);
    this.placeholder = placeholder;
    this.onClick = onClick ? onClick : this.changeIsClicked;
    this.onIconClick = onIconClick;
  }
}
