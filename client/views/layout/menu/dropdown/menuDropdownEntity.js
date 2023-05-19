import MenuValueEntity from "../menuValueEntity";

export default class MenuDropdownEntity extends MenuValueEntity {
  dropdownList;
  constructor(text, icon, dropdownList, onValueChange, currentValue) {
    super(text, icon, onValueChange, currentValue);
    this.dropdownList = dropdownList;
  }
}
