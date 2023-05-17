import MenuEntity from "../menuEntity";

export default class MenuItemEntity extends MenuEntity {
    onClick;
    onIconClick;
    constructor(
        text,
        icon,
        onClick,
        onIconClick,
    ) {
        super(text, icon);
        this.onClick = onClick;
        this.onIconClick = onIconClick;
    }
}