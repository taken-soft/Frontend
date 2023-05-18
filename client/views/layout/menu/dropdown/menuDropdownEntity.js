import MenuValueEntity from "../menuValueEntity";

export default class MenuDropdownEntity extends MenuValueEntity {
  dropdownList;
  constructor(
    text,
    icon,
    dropdownList,
    onDropdownChange,
    currentValue,
  ) {
    super(text, icon, currentValue);
    this.dropdownList = dropdownList;
    this.onDropdownChange = onDropdownChange;
  }
}