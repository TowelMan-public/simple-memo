export default class MemoEntity {
  public title: string;
  public content: string;

  constructor(object: any | null = null) {
    if (object == null) {
      this.title = "";
      this.content = "";
    } else {
      this.title = object.title;
      this.content = object.content;
    }
  }
}
