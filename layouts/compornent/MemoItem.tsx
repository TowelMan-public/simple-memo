import style from "../../styles/MemoItem.module.css";

function MemoItem(
  id: string = "" /*TODO*/,
  isShow: boolean = true
): JSX.Element {
  return (
    <div id={id} className={style.memo_item + (isShow ? "" : " none")}>
      <div id={id + "_title"} className={style.memo_item_title}>
        title
      </div>
      <div id={id + "_delete_button"} className={style.memo_item_delete_button}>
        <div className={style.rectangle_1} />
      </div>
      <textarea id={id + "_content"} className="none">
        content
      </textarea>
    </div>
  );
}

export default MemoItem;
