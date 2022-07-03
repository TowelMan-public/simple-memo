import style from "../../styles/MemoItemList.module.css";
import MemoItem from "./MemoItem";

function MemoItemList(/*TODO*/): JSX.Element {
  return (
    <div className={style.memo_item_list}>
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
      {MemoItem()}
    </div>
  );
}

export default MemoItemList;
