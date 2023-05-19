import EditMenuRoute from "./editMenuRoute";

export default class EditMenuWidgetRoute extends EditMenuRoute {
  isVanilla = true;
  changeIsVanilla(value) {
    this.isVanilla = value;
    this.editMenuStore.refresh();
  }
  addWidget = () => console.log(`${this.title} 위젯 추가`);
}
