import MenuEntity from "../menuEntity";

export default class MenuDropdownEntity extends MenuEntity {
  dropdownList;
  onDropdownChange;
  constructor(
    text,
    icon,
    dropdownList,
    onDropdownChange,
  ) {
    super(text, icon);
    this.dropdownList = dropdownList;
    this.onDropdownChange = onDropdownChange;
  }
}