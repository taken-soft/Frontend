import MenuEntity from "../menuEntity";

export default class MenuInputEntity extends MenuEntity {
    placeholder;
    constructor(
        text,
        icon,
        placeholder,
    ) {
        super(text, icon);
        this.placeholder = placeholder;
    }
}