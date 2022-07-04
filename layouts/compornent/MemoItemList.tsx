import style from "../../styles/MemoItemList.module.css";
import MemoItem from "./MemoItem";

function MemoItemList(/*TODO*/): JSX.Element {
  return (
    <div id="memo_item_list" className={style.memo_item_list}>
      <input
        id="counter_for_create_new_memo_item_id"
        type="number"
        className="none"
        defaultValue={0}
      />
      <input
        id="id_for_find_selected_memo_item"
        className="none"
        defaultValue={"none_memo_item_00000"}
      />
      {MemoItem("empty_memo_item", false)}
    </div>
  );
}

export default MemoItemList;
