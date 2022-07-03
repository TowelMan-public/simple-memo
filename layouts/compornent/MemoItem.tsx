import style from "../../styles/MemoItem.module.css";

function MemoItem(/*TODO*/): JSX.Element {
  return (
    <div className={style.memo_item}>
      <div className={style.memo_item_title}>title</div>
      <div className={style.memo_item_delete_button}>
        <div className={style.rectangle_1} />
      </div>
    </div>
  );
}

export default MemoItem;
