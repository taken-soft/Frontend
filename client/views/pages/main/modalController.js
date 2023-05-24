export default class ModalController {
  title;

  visible = false;

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  constructor(title) {
    this.title = title;
  }
}
