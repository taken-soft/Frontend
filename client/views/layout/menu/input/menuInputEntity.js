import MenuValueEntity from "../menuValueEntity";

export default class MenuInputEntity extends MenuValueEntity {
    placeholder;
    constructor(
        text,
        icon,
        placeholder,
        currentValue,
    ) {
        super(text, icon, currentValue);
        this.placeholder = placeholder;
    }
}