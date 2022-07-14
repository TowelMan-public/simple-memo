const memoItemListId = "memo_item_list";
const memoTitleBarTitleId = "memo_title_bar_title";
const memoContentId = "memo_content";
const emptyMemoItemId = "empty_memo_item";
const memoHumburgerMenuContainner = "memo_layout_humburger_menu_containner";

class MemoItemEntity {
  title; //string
  content; //string
}

function memoItemCounterForNewId(addValue = 0) {
  let counter = $("#counter_for_create_new_memo_item_id");
  if (addValue != 0) {
    counter.val(parseInt(counter.val()) + addValue);
  }
  return counter.val();
}

function selectedMemoItem(memoItemId = null) {
  let idInput = $("#id_for_find_selected_memo_item");
  if (memoItemId != null) {
    idInput.val(memoItemId);
  }
  return $("#" + idInput.val());
}

function createNewMemoId() {
  let id = "memo_item_" + memoItemCounterForNewId();
  return id;
}

function memoItemTitle(memoItemId, newTitle = null) {
  let id = memoItemId + "_title";
  if (newTitle != null) {
    $("#" + id).html(newTitle);
  }
  return $("#" + id).html();
}

function getMemoItemDeleteButton(memoItemId) {
  return $("#" + memoItemId + "_delete_button");
}

function memoItmeContent(memoItemId, newContent = null) {
  let id = memoItemId + "_content";
  if (newContent != null) {
    $("#" + id).val(newContent);
  }
  return $("#" + id).val();
}

function createNewMemoItem() {
  let id = createNewMemoId();
  $("#" + emptyMemoItemId)
    .clone(true, false)
    .removeClass("none")
    .appendTo("#" + memoItemListId)
    .attr("id", id)
    .click(function () {
      selectMemoItem(id);
    });
  $("#" + id + ">#" + emptyMemoItemId + "_delete_button").attr(
    "id",
    id + "_delete_button"
  );
  $("#" + id + ">#" + emptyMemoItemId + "_title").attr("id", id + "_title");
  $("#" + id + ">#" + emptyMemoItemId + "_content").attr("id", id + "_content");
  memoItemCounterForNewId(1);
  memoItemTitle(id, "メモ" + memoItemCounterForNewId());
  memoItmeContent(id, "ここにメモの内容を入力してください。");
  getMemoItemDeleteButton(id).click(function () {
    deleteMemoItem(id);
  });
  return id;
}

function selectMemoItem(memoItemId = null) {
  let id = memoItemId;
  if (id == null) {
    if (selectedMemoItem().length == 1) return;

    let memoItemList = $("#" + memoItemListId).children("div");
    if (memoItemList.length > 1) {
      id = memoItemList.eq(1).attr("id");
    } else {
      id = createNewMemoItem();
    }
  }

  selectedMemoItem(id);
  $("#" + memoTitleBarTitleId)
    .val(memoItemTitle(id))
    .off("change input")
    .on("input", function () {
      if ($(this).outerHeight() > this.scrollHeight) {
        $(this).height(1);
      }
      while ($(this).outerHeight() < this.scrollHeight) {
        $(this).height($(this).height() + 1);
      }
    })
    .trigger("input")
    .change(function () {
      memoTItleChangeEvent();
    });
  $("#" + memoContentId)
    .val(memoItmeContent(id))
    .off("change")
    .change(function () {
      memoContentChangeEvent();
    });
  $("#memo_title_bar_delete_button")
    .off("click")
    .click(function () {
      getMemoItemDeleteButton(id).click();
    });
}

function resetMemoItemList() {
  $("#" + memoItemListId)
    .children("div")
    .each(function (index, value) {
      if (index != 0) value.remove();
    });
  memoItemCounterForNewId(-memoItemCounterForNewId());
  selectMemoItem(createNewMemoItem());
}

function deleteMemoItem(memoItemId) {
  $("#" + memoItemId).remove();
  selectMemoItem();
}

function memoTItleChangeEvent() {
  let title = $("#" + memoTitleBarTitleId);
  title.val(title.val().replace(/\r?\n/g, ""));
  memoItemTitle(selectedMemoItem().attr("id"), title.val());
  title.trigger("input");
}

function memoContentChangeEvent() {
  memoItmeContent(selectedMemoItem().attr("id"), $("#" + memoContentId).val());
}

function getMemoItemEntityList() {
  let entityList = [];
  $("#" + memoItemListId)
    .children("div")
    .each(function (index, item) {
      if (index != 0) entityList.push(getMemoItemEntity($(item).attr("id")));
    });
  return entityList;
}

function getMemoItemEntity(memoItemId) {
  let entity = new MemoItemEntity();
  entity.title = memoItemTitle(memoItemId);
  entity.content = memoItmeContent(memoItemId);
  return entity;
}

function showMemoSaveHamburgerMenu() {
  openHumburgerMenu("memo_save_humburger_menu", memoHumburgerMenuContainner);
}

function saveMemoItemList() {
  let memoList = getMemoItemEntityList();
  jQuery
    .ajax({
      url: "/api/save",
      type: "post",
      data: { body: JSON.stringify(memoList) },
    })
    .done((body, textStatus, jqXHR) => {
      let id = body["id"];
      let period = new Date();
      period.setTime(body["period_time"]);

      closeHumburgerMenu();
      showMemoSaveResultHamburgerMenu(id, period);
    })
    .fail((body, textStatus, jqXHR) => {
      /* TODO clean this memo confirm(
        "あなたにその捜査権限がないため、その操作を行うことができないと思われます。"
      );*/
      showAjaxErrorHamburgerMenu();
    });
}

function showMemoSaveResultHamburgerMenu(id, period) {
  openHumburgerMenu(
    "memo_save_result_hamburger_menu",
    memoHumburgerMenuContainner
  );
  $("#memo_save_result_hamburger_menu_url_block").html(
    "localhost:8080/load?id=" + id
  );
  $(window).resize();

  let datetest = new Date();
  $("#memo_save_result_hamburger_menu_text_block").html(
    "保存期間は" +
      datetest.getFullYear() +
      "年" +
      datetest.getMonth() +
      "月" +
      datetest.getDate() +
      "日 " +
      datetest.getHours() +
      "時" +
      datetest.getMinutes() +
      "分" +
      datetest.getSeconds() +
      "秒です。"
  );
}
